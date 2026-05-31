// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
        site: "https://octabit.work",
        integrations: [mdx(), sitemap()],
        adapter: cloudflare(),
        server: {
                host: "0.0.0.0",
                port: 5000,
                allowedHosts: true,
        },
});
