import { relativeTime } from "../lib/format";
import type { MarketData, ServerEntry } from "../lib/types";
import { createFuse, loadMarket } from "./data";

const THEME_KEY = "dsh-mcp-theme";

function currentTheme(): "light" | "dark" {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function syncThemeControls() {
  const theme = currentTheme();
  const next = theme === "dark" ? "浅色" : "深色";
  document.querySelectorAll<HTMLButtonElement>("[data-theme-toggle]").forEach(
    (button) => {
      button.setAttribute("aria-label", `切换到${next}主题`);
      button.setAttribute("title", `切换到${next}主题`);
    },
  );
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", theme === "dark" ? "#0a0a0b" : "#fafafa");
}

function setTheme(theme: "light" | "dark") {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  document.documentElement.style.backgroundColor =
    theme === "dark" ? "#0a0a0b" : "#fafafa";
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    // Theme persistence is best-effort.
  }
  syncThemeControls();
}

document.querySelectorAll<HTMLButtonElement>("[data-theme-toggle]").forEach(
  (button) => {
    button.addEventListener("click", () => {
      setTheme(currentTheme() === "dark" ? "light" : "dark");
    });
  },
);
syncThemeControls();

function updateRelativeTimes(scope: ParentNode = document) {
  scope.querySelectorAll<HTMLTimeElement>("[data-relative-time]").forEach(
    (element) => {
      const value = element.dataset.date;
      if (value) {
        element.textContent = relativeTime(value);
      }
    },
  );
}
updateRelativeTimes();

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function appendHighlighted(
  container: HTMLElement,
  text: string,
  query: string,
) {
  container.replaceChildren();
  const terms = query
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map(escapeRegExp);

  if (terms.length === 0) {
    container.textContent = text;
    return;
  }

  const pattern = new RegExp(`(${terms.join("|")})`, "gi");
  const parts = text.split(pattern);
  const lowered = new Set(terms.map((term) => term.toLowerCase()));

  for (const part of parts) {
    if (!part) {
      continue;
    }
    if (lowered.has(part.toLowerCase())) {
      const mark = document.createElement("mark");
      mark.textContent = part;
      container.appendChild(mark);
    } else {
      container.appendChild(document.createTextNode(part));
    }
  }
}

const dialogElement = document.querySelector<HTMLDialogElement>(
  "[data-search-dialog]",
);

if (dialogElement) {
  const dialog = dialogElement;
  const root = dialog.dataset.root ?? "./";
  const indexUrl = dialog.dataset.indexUrl ?? `${root}index.json`;
  const input = dialog.querySelector<HTMLInputElement>("[data-search-input]");
  const results = dialog.querySelector<HTMLElement>("[data-search-results]");
  const closeButton = dialog.querySelector<HTMLButtonElement>(
    "[data-search-close]",
  );
  let entries: ServerEntry[] = [];
  let fuse: any = null;
  let loadPromise: Promise<void> | null = null;
  let activeIndex = 0;
  let currentResults: ServerEntry[] = [];
  let opener: HTMLElement | null = null;

  function setActive(index: number) {
    const items = [
      ...results!.querySelectorAll<HTMLAnchorElement>(".search-result"),
    ];
    if (items.length === 0) {
      return;
    }
    activeIndex = Math.max(0, Math.min(index, items.length - 1));
    items.forEach((item, itemIndex) => {
      const active = itemIndex === activeIndex;
      item.classList.toggle("active", active);
      item.setAttribute("aria-selected", active ? "true" : "false");
    });
    items[activeIndex]?.scrollIntoView({ block: "nearest" });
    input?.setAttribute(
      "aria-activedescendant",
      items[activeIndex]?.id ?? "",
    );
  }

  function renderResults() {
    const query = input?.value ?? "";
    if (!results) {
      return;
    }

    if (!fuse) {
      results.innerHTML = '<div class="search-message">正在加载搜索索引…</div>';
      return;
    }

    let matches: ServerEntry[];
    if (query.trim() && fuse) {
      matches = fuse
        .search(query.trim(), { limit: 10 })
        .map((item: any) => item.item as ServerEntry);
    } else {
      matches = entries.slice(0, 8);
    }
    currentResults = matches;
    activeIndex = 0;
    results.replaceChildren();

    if (matches.length === 0) {
      const empty = document.createElement("div");
      empty.className = "search-message";
      empty.textContent = "没有找到匹配的服务。试试更短的关键词。";
      results.appendChild(empty);
      input?.removeAttribute("aria-activedescendant");
      return;
    }

    matches.forEach((entry, index) => {
      const link = document.createElement("a");
      link.className = "search-result";
      link.href = `${root}servers/${entry.slug}/`;
      link.id = `global-search-result-${index}`;
      link.setAttribute("role", "option");
      link.setAttribute("aria-selected", index === 0 ? "true" : "false");

      const icon = document.createElement("img");
      icon.src = `${root}${entry.icon}`;
      icon.alt = "";
      icon.width = 28;
      icon.height = 28;
      icon.loading = "lazy";

      const copy = document.createElement("span");
      copy.className = "search-result-copy";

      const title = document.createElement("span");
      title.className = "search-result-title";
      appendHighlighted(title, entry.display_name, query);

      const description = document.createElement("span");
      description.className = "search-result-description";
      appendHighlighted(description, entry.description, query);

      const meta = document.createElement("span");
      meta.className = "search-result-meta";
      meta.textContent = [
        entry.vendor,
        entry.categories[0],
        entry.tools.length ? `${entry.tools.length} 工具` : null,
      ]
        .filter(Boolean)
        .join(" · ");

      copy.append(title, description, meta);
      link.append(icon, copy);
      link.addEventListener("mouseenter", () => setActive(index));
      results.appendChild(link);
    });

    setActive(0);
  }

  async function ensureData() {
    if (fuse) {
      return;
    }
    if (!loadPromise) {
      loadPromise = loadMarket(indexUrl)
        .then(async (data: MarketData) => {
          entries = data.entries;
          fuse = await createFuse(entries);
          renderResults();
        })
        .catch(() => {
          loadPromise = null;
          if (results) {
            results.innerHTML =
              '<div class="search-message">搜索索引加载失败，请刷新页面重试。</div>';
          }
        });
    }
    await loadPromise;
  }

  function openSearch() {
    opener = document.activeElement as HTMLElement | null;
    if (!dialog.open) {
      dialog.showModal();
    }
    document.body.classList.add("search-open");
    if (input) {
      input.value = "";
      input.focus();
    }
    renderResults();
    void ensureData();
  }

  function closeSearch() {
    if (dialog.open) {
      dialog.close();
    }
  }

  document.querySelectorAll<HTMLElement>("[data-search-open]").forEach(
    (button) => {
      button.addEventListener("click", openSearch);
    },
  );

  closeButton?.addEventListener("click", closeSearch);

  dialog.addEventListener("close", () => {
    document.body.classList.remove("search-open");
    input?.removeAttribute("aria-activedescendant");
    opener?.focus();
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      closeSearch();
    }
  });

  input?.addEventListener("input", () => {
    renderResults();
    void ensureData();
  });

  input?.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive(activeIndex + 1);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive(activeIndex - 1);
    } else if (event.key === "Enter") {
      const active = currentResults[activeIndex];
      if (active) {
        event.preventDefault();
        window.location.assign(`${root}servers/${active.slug}/`);
      }
    } else if (event.key === "Escape") {
      event.preventDefault();
      closeSearch();
    }
  });

  document.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      if (dialog.open) {
        closeSearch();
      } else {
        openSearch();
      }
    }
  });
}
