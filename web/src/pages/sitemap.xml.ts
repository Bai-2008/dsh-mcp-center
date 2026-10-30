import type { APIRoute } from "astro";

import { canonicalUrl } from "../lib/format";
import type { MarketData } from "../lib/types";
import market from "../data/index.json";

export const prerender = true;

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export const GET: APIRoute = () => {
  const data = market as MarketData;
  const urls = [
    `<url><loc>${escapeXml(canonicalUrl(data.site, ""))}</loc><changefreq>daily</changefreq></url>`,
    ...data.entries.map(
      (entry) =>
        `<url><loc>${escapeXml(
          canonicalUrl(data.site, entry.detail_path),
        )}</loc><lastmod>${entry.last_checked}</lastmod></url>`,
    ),
  ];

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join(
      "\n",
    )}\n</urlset>\n`,
    {
      headers: {
        "content-type": "application/xml; charset=utf-8",
      },
    },
  );
};
