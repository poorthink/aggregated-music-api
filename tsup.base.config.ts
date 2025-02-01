import { defineConfig } from "tsup";

export default defineConfig({
  splitting: false,
  clean: true,
  target: "es2020",
  format: ["esm", "cjs"],
  outDir: "dist",
  outExtension: ({ format }) =>
    format === "esm" ? { js: ".mjs" } : { js: ".cjs" },
});
