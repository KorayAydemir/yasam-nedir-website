module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/strict",
    ],
    ignorePatterns: ["build", "coverage", "node_modules", "public"],
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
        {
            files: ["**/*.test.ts", "**/*.test.tsx"],
            plugins: ["jest"],
            extends: ["plugin:jest/all", "plugin:jest-dom/recommended"],
            //rules: { "jest/prefer-expect-assertions": "off" },
            rules: { "jest/require-top-level-describe": "off" },
        },
        {
            files: ["src/server/**/*.ts", "src/server/**/*.tsx"],
            plugins: ["node"],
            extends: ["plugin:node/recommended"],
            rules: {
                "node/no-unsupported-features/es-syntax": "off",
                "node/no-missing-import": "off",
            },
        },
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
    },
    plugins: [
        "@typescript-eslint",
        "react",
        "jest-dom",
        "jsx-a11y",
        "react-hooks",
    ],
    rules: {
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/no-unused-vars": [
            "error",
            { argsIgnorePattern: "^_" },
        ],
        "no-console": "off", // temporary
    },
    settings: {
        react: {
            version: "18",
        },
        "jsx-a11y": {
            components: {
                CityInput: "input",
                MyButton: "button",
            },
        },
    },
};
