import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react(), tailwindcss()],
    // base: "/portfolio/",
    base: process.env.VITE_BASE_BATH || "/portfolio",
});
