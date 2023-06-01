module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    extraFileExtensions: [".vue"],
  },
  globals: {
    $nuxt: false,
    describe: false,
    context: false,
    beforeEach: false,
    afterEach: false,
    it: false,
    assert: false,
    expect: false,
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:vue/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "vue"],
  rules: {
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    semi: [2, "never"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    indent: ["error", 2, { SwitchCase: 1, ignoredNodes: ["TemplateLiteral"] }],
    quotes: ["error", "double", "avoid-escape"],
    "vue/max-attributes-per-line": "off",
    "vue/html-self-closing": "off",
    "vue/singleline-html-element-content-newline": "off",
    "prettier/prettier": ["error", { semi: false }],
    "vue/no-v-html": "off",
    "vue/attribute-hyphenation": "off",
    "vue/valid-v-slot": [
      "error",
      {
        allowModifiers: true,
      },
    ],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        ignoreRestSiblings: true,
      },
    ],
    "no-control-regex": 0,
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
    ],
    "vue/padding-line-between-blocks": 2,
  },
}
