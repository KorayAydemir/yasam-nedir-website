module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    plugins: ["@typescript-eslint", "react"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/no-unused-vars": [
            "error",
            { argsIgnorePattern: "^_" },
            { varsIgnorePattern: "^_" }
        ],
    },
};
