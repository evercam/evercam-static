module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser",
    },
    extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended"],
    plugins: [],
    rules: {
        "vue/no-multiple-template-root": "off",
        "vue/require-default-prop": "off",
        "import/first": "off",
        "prettier/prettier": [
            "error",
            {
                trailingComma: "es5",
                tabWidth: 2,
                semi: false,
                singleQuote: false,
            },
        ],
    },
}
