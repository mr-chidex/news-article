module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["react-app", "plugin:react/recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
  },
};
