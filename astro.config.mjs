// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["astro.build", "github.com", "res.cloudinary.com"],
    remotePatterns: [{ protocol: "https" }],
  },
});
