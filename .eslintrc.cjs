/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: ['@typescript-eslint/parser', 'vue-eslint-parser'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  }
}
