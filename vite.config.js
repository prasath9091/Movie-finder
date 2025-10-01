// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
//   base: '/Movie-finder/',
//   plugins: [react()],
// })
// export default defineConfig({
//   base: "/",
//   build: {
//     outDir: "dist"
//   }
// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    outDir: "dist"
  }
});


