module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true
  },
  extends: ['standard','plugin:react/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  parser: "babel-eslint",
  plugins: ['react', 'jsx-a11y', 'flowtype'],
  rules: {
    semi: 2,
    camelcase: 0,
    'react/no-string-refs' : 0,
    'react/prop-types': 0
  }
}
