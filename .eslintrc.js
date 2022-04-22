module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "no-unused-vars": 1,
  },
  overrides: [
    {
      files: ["*.js"],
      processor: "@graphql-eslint/graphql",
      plugins: ["@graphql-eslint"],
      parserOptions: {
        schema: "../../server/src/graphql-lims/schema/schema.gql",
      },
    },
  ],
};
