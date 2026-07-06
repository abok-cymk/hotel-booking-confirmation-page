// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'


// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },

  server: {
    host: true,
  },

  site: "https://abok-cymk.github.io",
  base: "/hotel-booking-confirmation-page",
});