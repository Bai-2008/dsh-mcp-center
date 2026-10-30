import type { APIRoute } from "astro";

import { canonicalUrl } from "../lib/format";
import type { MarketData } from "../lib/types";
import market from "../data/index.json";

export const prerender = true;

export const GET: APIRoute = () => {
  const data = market as MarketData;
  return new Response(
    `User-agent: *\nAllow: /\nSitemap: ${canonicalUrl(data.site, "sitemap.xml")}\n`,
    {
      headers: {
        "content-type": "text/plain; charset=utf-8",
      },
    },
  );
};
