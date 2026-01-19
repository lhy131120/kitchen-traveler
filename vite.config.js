import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import process from "process";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
	base: process.env.NODE_ENV === "production" ? "/kitchen-traveler/" : "/",
	plugins: [react(), tailwindcss()],
});
