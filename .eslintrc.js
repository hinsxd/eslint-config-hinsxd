/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  ignorePatterns: ["*.js"],
  parser: "@typescript-eslint/parser",

  plugins: [
    "@typescript-eslint/eslint-plugin",
    "unused-imports",
    "prettier",
    "import",
  ],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "import/no-unresolved": "error",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "unknown",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        "newlines-between": "always-and-inside-groups",
        pathGroups: [
          {
            group: "internal",
            pattern: "@/**",
          },
        ],
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            group: ["src/*"],
            message: 'Please use "@/..." for absolute import',
          },
        ],
      },
    ],
    "prettier/prettier": "warn",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": "warn",
  },
  overrides: [
    {
      files: "*.ts",
      parserOptions: {
        project: "tsconfig.json",
        sourceType: "module",
      },
      settings: {
        "import/resolver": {
          typescript: {},
        },
      },

      env: {
        node: true,
        jest: true,
      },

      rules: {},
    },
    {
      files: "*.tsx",
      extends: ["next", "next/core-web-vitals"],
      rules: {
        "react/display-name": "off",
        "react/button-has-type": "warn",
      },
    },
  ],
}
