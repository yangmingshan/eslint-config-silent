'use strict';

const isProd = process.env.NODE_ENV === 'production';

const config = {
  root: true,
  ignorePatterns: ['test-lint'],
  extends: [
    'xo/esnext',
    require.resolve('xo/config/plugins'),
    'plugin:prettier/recommended',
    'prettier/unicorn',
  ],
  rules: {
    'no-console': 'error',
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
