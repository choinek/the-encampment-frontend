module.exports = {
    env: {
      browser: true,
      es6: true,
      "jest/globals": true
    },
    parser: 'babel-eslint',
    extends: ['airbnb', 'prettier', 'prettier/react'],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
        modules: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
      'react/forbid-prop-types': [0, { forbid: ['any'] }],
      'react/prop-types': 0,
      "react/jsx-filename-extension": "off",
      "react/forbid-foreign-prop-types": "off",
      "max-len": [2, {"code": 150, "tabWidth": 4, "ignoreUrls": true}],
      "no-underscore-dangle": "off",
      "react/no-unescaped-entities": "off",
      "no-use-before-define": "off",
      "function-call-argument-newline": ["error", "consistent"],
      "no-console": ["error", { "allow": ["warn", "error"]}]
    },
    env: {
      jest: true,
      browser: true,
      node: true,
    },
  };