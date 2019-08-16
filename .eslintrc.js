module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['standard', 'react-app'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    document: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'flowtype', 'jsx-a11y', 'react-hooks'],
  rules: {}
}
