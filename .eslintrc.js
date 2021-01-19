module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    "plugin:prettier/recommended",
    "prettier"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    "prettier"
  ],
  rules: {
    "prettier/prettier": 2
  }
}
