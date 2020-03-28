module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    'import/core-modules': [],
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg|json)$',
    ],
  },
  rules: {
    "prettier/prettier": "error",
    "camelcase": "off",
    "no-unused-vars": ["error", { "argsIgnorePattern": "next" }],
    "linebreak-style": 0,
    "global-require": 0,
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "ESlint linebreak-style": [0, "error", "windows"],
  },
};
