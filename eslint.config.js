import tsEslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...tsEslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];
