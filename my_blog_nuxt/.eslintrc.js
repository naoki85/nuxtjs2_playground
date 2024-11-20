module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs',
    'plugin:prettier/recommended'
  ],
  plugins: [
    'prettier',
    '@typescript-eslint'
  ],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "vue/html-self-closing": "off"
  }
}
