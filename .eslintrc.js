module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true
  },
  extends: ['standard', 'react-app'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'flowtype', 'jsx-a11y'],
  rules: {
    semi: 2
  }
}
