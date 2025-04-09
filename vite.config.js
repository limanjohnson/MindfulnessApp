import { defineConfig } from "vite";
import {resolve} from "node:path";

export default defineConfig({
    root: "src/",

    build: {
        outDir: "../dist",
        rollupOptions: {
            input: {
                dashboard: resolve(__dirname, "src/index.html"),
                journalActivity: resolve(__dirname, "src/journal/index.html")
            },
        },
    },
});
