const CLIENT_KEY = "dsh-mcp-install-client";

function activateInstallTab(
  card: HTMLElement,
  id: string,
  persist: boolean,
) {
  const tabs = [
    ...card.querySelectorAll<HTMLButtonElement>("[data-install-tab]"),
  ];
  const panels = [
    ...card.querySelectorAll<HTMLElement>("[data-install-panel]"),
  ];

  for (const tab of tabs) {
    const active = tab.dataset.installTab === id;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", active ? "true" : "false");
    tab.tabIndex = active ? 0 : -1;
  }

  for (const panel of panels) {
    panel.hidden = panel.dataset.installPanel !== id;
  }

  if (persist) {
    try {
      localStorage.setItem(CLIENT_KEY, id);
    } catch {
      // Ignore storage failures.
    }
  }
}

const card = document.querySelector<HTMLElement>("[data-install-card]");

if (card) {
  let activeId =
    card.querySelector<HTMLElement>("[data-install-panel]:not([hidden])")
      ?.dataset.installPanel ?? "dsh";

  try {
    const stored = localStorage.getItem(CLIENT_KEY);
    if (
      stored &&
      card.querySelector(`[data-install-tab="${stored}"]`) &&
      card.querySelector(`[data-install-panel="${stored}"]`)
    ) {
      activeId = stored;
    }
  } catch {
    // Ignore storage failures.
  }

  activateInstallTab(card, activeId, false);

  card
    .querySelectorAll<HTMLButtonElement>("[data-install-tab]")
    .forEach((tab, index, tabs) => {
      tab.addEventListener("click", () => {
        const id = tab.dataset.installTab;
        if (id) {
          activateInstallTab(card, id, true);
        }
      });

      tab.addEventListener("keydown", (event) => {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
          return;
        }
        event.preventDefault();
        const direction = event.key === "ArrowRight" ? 1 : -1;
        const nextIndex = (index + direction + tabs.length) % tabs.length;
        tabs[nextIndex]?.focus();
        const nextId = tabs[nextIndex]?.dataset.installTab;
        if (nextId) {
          activateInstallTab(card, nextId, true);
        }
      });
    });
}

async function copyText(text: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.opacity = "0";
  document.body.appendChild(area);
  area.select();
  const execCommand = (document as Document & {
    execCommand?: (commandId: string) => boolean;
  }).execCommand;
  execCommand?.call(document, "copy");
  area.remove();
}

document.querySelectorAll<HTMLButtonElement>("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    const panel = button.closest<HTMLElement>("[data-install-panel]");
    const code = panel?.querySelector<HTMLElement>(".code-block");
    if (!code) {
      return;
    }

    const label = button.querySelector<HTMLElement>("[data-copy-label]");
    try {
      await copyText(code.textContent ?? "");
      button.classList.add("copied");
      if (label) {
        label.textContent = "已复制 ✓";
      }
      window.setTimeout(() => {
        button.classList.remove("copied");
        if (label) {
          label.textContent = "复制";
        }
      }, 1500);
    } catch {
      if (label) {
        label.textContent = "复制失败";
      }
    }
  });
});
