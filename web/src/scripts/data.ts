import type { MarketData, ServerEntry } from "../lib/types";

let fuseModule: Promise<any> | null = null;
const marketCache = new Map<string, Promise<MarketData>>();

export const FUSE_KEYS = [
  { name: "display_name", weight: 0.3 },
  {
    name: "name",
    weight: 0.18,
    getFn: (entry: ServerEntry) => entry.name.replace(/^io\.github\./, ""),
  },
  { name: "vendor", weight: 0.07 },
  { name: "description", weight: 0.2 },
  { name: "categories", weight: 0.12 },
  { name: "tags", weight: 0.07 },
  { name: "tools.name", weight: 0.08 },
  { name: "tools.description", weight: 0.08 },
];

export function loadMarket(indexUrl: string): Promise<MarketData> {
  if (!marketCache.has(indexUrl)) {
    const request = fetch(indexUrl, { credentials: "same-origin" }).then(
      async (response) => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        return (await response.json()) as MarketData;
      },
    );
    marketCache.set(indexUrl, request);
  }
  return marketCache.get(indexUrl)!;
}

export async function loadFuse(): Promise<any> {
  if (!fuseModule) {
    fuseModule = import("fuse.js").then((module) => module.default);
  }
  return fuseModule;
}

export async function createFuse(entries: ServerEntry[]): Promise<any> {
  const Fuse = await loadFuse();
  return new Fuse(entries, {
    includeScore: true,
    threshold: 0.34,
    ignoreLocation: true,
    minMatchCharLength: 1,
    keys: FUSE_KEYS,
  });
}
