import { defineConfig } from "tsup";
import tsupBaseConfig from "../tsup.base.config";

export default defineConfig({
  ...tsupBaseConfig,
  entry: ["./index.ts"],
  dts: true,
});
