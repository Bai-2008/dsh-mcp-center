import type { SiteInfo, TransportType } from "./types";

export function escapeHtml(value: string): string {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function highlightPlaceholders(code: string): string {
  return code
    .split(/(<YOUR_[A-Z0-9_]+>)/g)
    .map((part) =>
      /^<YOUR_[A-Z0-9_]+>$/.test(part)
        ? `<span class="code-placeholder">${escapeHtml(part)}</span>`
        : escapeHtml(part),
    )
    .join("");
}

export function relativeTime(dateString: string, now = new Date()): string {
  const target = new Date(`${dateString}T00:00:00Z`);
  if (Number.isNaN(target.getTime())) {
    return "校验时间未知";
  }

  const today = Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
  );
  const days = Math.floor((today - target.getTime()) / 86_400_000);

  if (days <= 0) {
    return "今天校验";
  }
  if (days === 1) {
    return "昨天校验";
  }
  if (days < 30) {
    return `${days} 天前校验`;
  }
  if (days < 365) {
    return `${Math.floor(days / 30)} 个月前校验`;
  }
  return `${Math.floor(days / 365)} 年前校验`;
}

export function transportLabel(type: TransportType): string {
  if (type === "stdio") {
    return "stdio";
  }
  if (type === "sse") {
    return "SSE";
  }
  return "Streamable HTTP";
}

export function canonicalUrl(site: SiteInfo, pathname: string): string {
  const origin = site.origin.replace(/\/+$/, "");
  const base = site.base.endsWith("/") ? site.base : `${site.base}/`;
  const path = pathname.replace(/^\/+/, "");
  return `${origin}${base}${path}`;
}

export function formatGeneratedAt(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "";
  }
  return date.toLocaleString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}
