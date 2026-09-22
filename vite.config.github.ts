import baseConfig from "./vite.config";
import { defineConfig, mergeConfig } from "vite";

export default defineConfig(
  mergeConfig(baseConfig, {
    base: "/codigodedeus/",
  }),
);
