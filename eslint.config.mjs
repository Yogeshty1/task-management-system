import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { Linter } from 'eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {Linter.Config} */
const eslintConfig = {
  extends: ['next', 'next/core-web-vitals'],
  rules: {
    '@next/next/no-duplicate-head': 'off', // Disable the problematic rule
  },
};

export default eslintConfig;
