import { defineConfig } from "vite";
import {resolve} from "node:path";

export default defineConfig({
    root: "src/",

    build: {
        outDir: "../dist",
        rollupOptions: {
            input: {
                dashboard: resolve(__dirname, "src/dashboard/index.html"),
                journalActivity: resolve(__dirname, "src/journal/index.html"),
                activities: resolve(__dirname, "src/activities/index.html"),

            },
        },
    },
});
