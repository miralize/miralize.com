// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

console.log(path.resolve(__dirname, './src/'));

module.exports = {
  env: {
    node: true,
  },
  parser: 'vue-eslint-parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  root: true,
  rules: {
    'lines-between-class-members': 2,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'import/prefer-default-export': 0,
    'import/no-absolute-path': 0,
    'vue/array-bracket-spacing': 2,
    'vue/arrow-spacing': 2,
    'vue/block-spacing': 2,
    'vue/brace-style': 2,
    'vue/camelcase': 2,
    'vue/comma-dangle': 2,
    'vue/comma-spacing': 2,
    'vue/comma-style': 2,
    'vue/component-name-in-template-casing': 2,
    'vue/dot-location': 2,
    'vue/dot-notation': 2,
    'vue/eqeqeq': 2,
    'vue/html-comment-content-newline': 2,
    'vue/html-comment-content-spacing': 2,
    'vue/html-comment-indent': 2,
    'vue/key-spacing': 2,
    'vue/keyword-spacing': 2,
    'vue/match-component-file-name': 2,
    'vue/no-duplicate-attr-inheritance': 2,
    'vue/no-empty-pattern': 2,
    'vue/no-extra-parens': 2,
    'vue/no-irregular-whitespace': 2,
    'vue/no-potential-component-option-typo': 2,
    'vue/no-reserved-component-names': 2,
    'vue/no-restricted-syntax': 2,
    'vue/no-static-inline-styles': 2,
    'vue/no-template-target-blank': 2,
    'vue/no-unsupported-features': 2,
    'vue/no-unused-properties': 2,
    'vue/no-useless-concat': 2,
    'vue/object-curly-spacing': [2, 'always'],
    'vue/padding-line-between-blocks': 2,
    'vue/prefer-template': 2,
    'vue/require-explicit-emits': 2,
    'vue/script-indent': 2,
    'vue/space-in-parens': 2,
    'vue/space-infix-ops': 2,
    'vue/space-unary-ops': 2,
    'vue/static-class-names-order': 2,
    'vue/template-curly-spacing': 2,
    'vue/v-on-function-call': 2,
    'vue/no-unregistered-components': [2, {
      ignorePatterns: ['router-link'],
    }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['*.js', '**/*.test.js', '**/*.spec.js', 'vite.config.ts'] }],

    // 'vue/require-direct-export': 2,
    // 'vue/require-name-property': 2,
    // 'vue/sort-keys': 2,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['/@', path.resolve(__dirname, './src')],
        ],
        extensions: ['.ts', '.js', '.vue', '.svg', '.scss'],
      },
    },
  },
};
