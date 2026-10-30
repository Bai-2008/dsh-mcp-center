import type { MarketData, ServerEntry } from "../lib/types";
import { createFuse, loadMarket } from "./data";

const root = document.body.dataset.root ?? "./";
const input = document.querySelector<HTMLInputElement>("[data-home-search]");
const clearSearchButton = document.querySelector<HTMLButtonElement>(
  "[data-search-clear]",
);
const grid = document.querySelector<HTMLElement>("[data-server-grid]");
const cards = [
  ...document.querySelectorAll<HTMLElement>("[data-card]"),
];
const categoryLinks = [
  ...document.querySelectorAll<HTMLAnchorElement>("[data-category-link]"),
];
const officialButton = document.querySelector<HTMLButtonElement>(
  "[data-filter-official]",
);
const verifiedButton = document.querySelector<HTMLButtonElement>(
  "[data-filter-verified]",
);
const transportButtons = [
  ...document.querySelectorAll<HTMLButtonElement>("[data-transport-filter]"),
];
const resultCount = document.querySelector<HTMLElement>("[data-result-count]");
const emptyState = document.querySelector<HTMLElement>("[data-empty-state]");
const clearButtons = [
  ...document.querySelectorAll<HTMLButtonElement>("[data-clear-filters]"),
];

const categories = new Set(
  categoryLinks
    .map((link) => link.dataset.cat ?? "全部")
    .filter((category) => category !== "全部"),
);

const state = {
  query: "",
  category: "全部",
  official: false,
  verified: false,
  transports: new Set<string>(),
};

let entries: ServerEntry[] = [];
let fuse: any = null;
let dataPromise: Promise<void> | null = null;
let applyVersion = 0;
let urlTimer = 0;

function hasActiveFilters(): boolean {
  return (
    Boolean(state.query.trim()) ||
    state.category !== "全部" ||
    state.official ||
    state.verified ||
    state.transports.size > 0
  );
}

function readStateFromUrl() {
  const params = new URLSearchParams(window.location.search);
  state.query = params.get("q") ?? "";
  const category = params.get("cat") ?? "全部";
  state.category = categories.has(category) ? category : "全部";
  state.official = params.get("official") === "1";
  state.verified = params.get("verified") === "1";
  state.transports = new Set(
    (params.get("transport") ?? "")
      .split(",")
      .filter((transport) =>
        ["stdio", "streamable_http", "sse"].includes(transport),
      ),
  );

  if (input) {
    input.value = state.query;
  }
}

function writeStateToUrl(mode: "push" | "replace" = "push") {
  const params = new URLSearchParams();
  if (state.query.trim()) {
    params.set("q", state.query.trim());
  }
  if (state.category !== "全部") {
    params.set("cat", state.category);
  }
  if (state.official) {
    params.set("official", "1");
  }
  if (state.verified) {
    params.set("verified", "1");
  }
  if (state.transports.size > 0) {
    params.set("transport", [...state.transports].sort().join(","));
  }

  const url = new URL(window.location.href);
  url.search = params.toString();
  const method = mode === "push" ? "pushState" : "replaceState";
  window.history[method]({}, "", url);
}

function scheduleUrlUpdate() {
  window.clearTimeout(urlTimer);
  urlTimer = window.setTimeout(() => {
    writeStateToUrl("push");
  }, 220);
}

function syncControls() {
  categoryLinks.forEach((link) => {
    const active = (link.dataset.cat ?? "全部") === state.category;
    link.classList.toggle("active", active);
    if (active) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  officialButton?.classList.toggle("active", state.official);
  officialButton?.setAttribute(
    "aria-pressed",
    state.official ? "true" : "false",
  );
  verifiedButton?.classList.toggle("active", state.verified);
  verifiedButton?.setAttribute(
    "aria-pressed",
    state.verified ? "true" : "false",
  );

  transportButtons.forEach((button) => {
    const active = state.transports.has(
      button.dataset.transportFilter ?? "",
    );
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", active ? "true" : "false");
  });

  if (clearSearchButton) {
    clearSearchButton.hidden = !state.query;
  }
  clearButtons.forEach((button) => {
    button.hidden = !hasActiveFilters();
  });
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightText(element: HTMLElement, query: string) {
  if (!element.dataset.originalText) {
    element.dataset.originalText = element.textContent ?? "";
  }
  const text = element.dataset.originalText;
  const terms = query
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map(escapeRegExp);

  element.replaceChildren();
  if (terms.length === 0) {
    element.textContent = text;
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
      element.appendChild(mark);
    } else {
      element.appendChild(document.createTextNode(part));
    }
  }
}

function ensureSearchData(): Promise<void> {
  if (!dataPromise) {
    const indexUrl = new URL(`${root}index.json`, window.location.href).href;
    dataPromise = loadMarket(indexUrl)
      .then(async (data: MarketData) => {
        entries = data.entries;
        fuse = await createFuse(entries);
      })
      .catch((error) => {
        console.error("搜索索引加载失败", error);
      });
  }
  return dataPromise;
}

async function applyFilters() {
  const run = ++applyVersion;
  let matchedSlugs: Set<string> | null = null;

  if (state.query.trim()) {
    grid?.setAttribute("aria-busy", "true");
    await ensureSearchData();
    if (run !== applyVersion) {
      return;
    }
    if (fuse) {
      matchedSlugs = new Set(
        fuse
          .search(state.query.trim())
          .map((result: any) => result.item.slug as string),
      );
    } else {
      matchedSlugs = new Set(
        cards.map((card) => card.dataset.slug ?? ""),
      );
    }
    grid?.removeAttribute("aria-busy");
  } else {
    grid?.removeAttribute("aria-busy");
  }

  let visible = 0;
  for (const card of cards) {
    const cardCategories = new Set(
      (card.dataset.categories ?? "").split("|").filter(Boolean),
    );
    const official = card.dataset.official === "true";
    const verified = card.dataset.verified === "true";
    const transport = card.dataset.transport ?? "";

    const matches =
      (state.category === "全部" || cardCategories.has(state.category)) &&
      (!state.official || official) &&
      (!state.verified || verified) &&
      (state.transports.size === 0 || state.transports.has(transport)) &&
      (!matchedSlugs || matchedSlugs.has(card.dataset.slug ?? ""));

    card.hidden = !matches;
    if (matches) {
      visible += 1;
      const title = card.querySelector<HTMLElement>("[data-search-title]");
      const description = card.querySelector<HTMLElement>(
        "[data-search-description]",
      );
      if (title) {
        highlightText(title, state.query);
      }
      if (description) {
        highlightText(description, state.query);
      }
    }
  }

  if (resultCount) {
    resultCount.textContent = String(visible);
  }
  if (emptyState) {
    emptyState.hidden = visible > 0;
  }
  syncControls();
}

function resetFilters() {
  state.query = "";
  state.category = "全部";
  state.official = false;
  state.verified = false;
  state.transports.clear();
  if (input) {
    input.value = "";
  }
  void applyFilters();
  writeStateToUrl("push");
}

input?.addEventListener("input", () => {
  state.query = input.value;
  void applyFilters();
  scheduleUrlUpdate();
});

clearSearchButton?.addEventListener("click", () => {
  if (!input) {
    return;
  }
  input.value = "";
  state.query = "";
  void applyFilters();
  writeStateToUrl("push");
  input.focus();
});

categoryLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    state.category = link.dataset.cat ?? "全部";
    void applyFilters();
    writeStateToUrl("push");
  });
});

officialButton?.addEventListener("click", () => {
  state.official = !state.official;
  void applyFilters();
  writeStateToUrl("push");
});

verifiedButton?.addEventListener("click", () => {
  state.verified = !state.verified;
  void applyFilters();
  writeStateToUrl("push");
});

transportButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const transport = button.dataset.transportFilter;
    if (!transport) {
      return;
    }
    if (state.transports.has(transport)) {
      state.transports.delete(transport);
    } else {
      state.transports.add(transport);
    }
    void applyFilters();
    writeStateToUrl("push");
  });
});

clearButtons.forEach((button) => {
  button.addEventListener("click", resetFilters);
});

window.addEventListener("popstate", () => {
  window.clearTimeout(urlTimer);
  readStateFromUrl();
  void applyFilters();
});

readStateFromUrl();
syncControls();
void applyFilters();
