'use strict';

const isProd = process.env.NODE_ENV === 'production';

const config = {
  root: true,
  extends: [
    'xo/esnext',
    require.resolve('xo/config/plugins'),
    'plugin:prettier/recommended',
    'prettier/unicorn',
  ],
  rules: {
    'no-console': isProd ? 2 : 0,
    'no-debugger': isProd ? 2 : 0
  }
};

if (!isProd) {
  config.extends = [
    ...config.extends,
    '.',
    './ava',
    './import',
    './unicorn',
    './prettier'
  ];
}

module.exports = config;
