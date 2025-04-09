import { defineConfig } from "vite";
import {resolve} from "node:path";

export default defineConfig({
    root: "src/",

    build: {
        outDir: "../dist",
        rollupOptions: {
            input: {
                dashboard: resolve(__dirname, "src/index.html"),
                journalActivity: resolve(__dirname, "src/journal/index.html"),
                activities: resolve(__dirname, "src/activities/index.html"),
                breathing: resolve(__dirname, "src/breathing/index.html"),
                listing: resolve(__dirname, "src/listing/index.html"),
                profile: resolve(__dirname, "src/profile/index.html"),
                reflection: resolve(__dirname, "src/reflection/index.html"),

            },
        },
    },
});
