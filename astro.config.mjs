import { defineConfig } from "astro/config";

function normalizeBase(value) {
  const base = value || "/";
  return `/${base.replace(/^\/+|\/+$/g, "")}/`.replace(/^\/\/$/, "/");
}

const base = normalizeBase(process.env.SITE_BASE);
const site = process.env.SITE_ORIGIN || "http://localhost:4321";

export default defineConfig({
  srcDir: "./web/src",
  publicDir: "./web/public",
  outDir: "./dist-site",
  site,
  base,
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  devToolbar: {
    enabled: false,
  },
});
