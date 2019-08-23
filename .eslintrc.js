module.exports = {
  "plugins": [
    "cypress",
    "chai-friendly"
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    "cypress/globals": true
  },
  extends: [
    // airbnb-base',
    "plugin:cypress/recommended"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "no-assigning-return-values": 0,
    "no-unnecessary-waiting": 0,
    "assertion-before-screenshot": "warn",
    "no-unused-expressions": 0,
    "chai-friendly/no-unused-expressions": 2,
    "assertion-before-screenshot": 0,
  },
};
