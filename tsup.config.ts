import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true, // Ensure types are being generated
  tsconfig: "tsconfig.app.json", // Correct configuration file
  splitting: false,
  sourcemap: true,
  clean: true,
  loader: {
    ".png": "dataurl",
    ".svg": "dataurl",
  },
});
