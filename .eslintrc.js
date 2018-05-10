module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'amd': true,
    'node': true,
    'jest': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
  ],
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaVersion': 8,
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'jsx': true,
    },
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    'jest',
  ],
  'rules': {
    'no-console': 0,
    'react/prop-types': 0,
    'no-case-declarations': 0,
    'curly': [
      'error',
      'multi-line',
      'consistent',
    ],
    'indent': [
      'error',
      'tab',
      {
        'SwitchCase': 1,
        'MemberExpression': 0,
      },
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'quotes': [
      'error',
      'double',
    ],
    'semi': [
      'error',
      'never',
    ],
  },
};