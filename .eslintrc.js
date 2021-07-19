'use strict';

const isProd = process.env.NODE_ENV === 'production';

const config = {
  root: true,
  ignorePatterns: ['test-lint'],
  extends: [
    'xo',
    require.resolve('xo/config/plugins.cjs'),
    'plugin:prettier/recommended',
    'prettier',
  ],
  rules: {
    'no-console': 'error',
    'import/extensions': 'off',
    'unicorn/prefer-module': 'off',
  },
};

if (!isProd) {
  config.extends = [
    ...config.extends,
    '.',
    './ava',
    './import',
    './unicorn',
    './prettier',
  ];
}

module.exports = config;
