import nextTypescript from "eslint-config-next/typescript"
import { defineConfig, globalIgnores } from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"
import prettier from "eslint-config-prettier/flat"
import unusedImports from "eslint-plugin-unused-imports"

const eslintConfig = defineConfig([
  ...nextTypescript,
  ...nextVitals,
  prettier,
  {
    plugins: {
      "unused-imports": unusedImports,
    },
    rules: {
      "unused-imports/no-unused-imports": "error",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
])

export default eslintConfig
