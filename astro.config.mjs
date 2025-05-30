// @ts-check
import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import stripEmojisSlug from './src/lib/stripEmojiSlugs.js';

// https://astro.build/config
export default defineConfig({
  site: 'https://portfolio.integrarte.arq.br/',
  integrations: [
    mdx(),
    react(),
    tailwind({ applyBaseStyles: false }),
    icon({
      include: {
        local: ['*'],    // allow all icons in src/icons/
      }
    }),
    sitemap()
  ],
  markdown: {
    remarkPlugins: [
      stripEmojisSlug
    ],
    rehypePlugins: [],
    shikiConfig: {
      theme: 'plastic',
      wrap: true,
    },
  },
  experimental: {
    svg: true,
  }
});