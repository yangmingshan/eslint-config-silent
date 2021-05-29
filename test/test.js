'use strict';

const path = require('path');
const { promises: fsPromises } = require('fs');
const test = require('ava');
const eslint = require('eslint');

const parserOptions = {
  ecmaVersion: 2020,
  sourceType: 'module',
};

const hasRule = (errors, ruleId) => errors.some((x) => x.ruleId === ruleId);

function isPlainObject(value) {
  if (Object.prototype.toString.call(value) !== '[object Object]') {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
}

async function runEslint(string, conf) {
  const linter = new eslint.ESLint({
    useEslintrc: false,
    baseConfig: conf,
  });

  const [{ messages }] = await linter.lintText(string);
  return messages;
}

test('main', async (t) => {
  const conf = require('..');

  t.true(isPlainObject(conf));
  t.true(isPlainObject(conf.rules));
  t.true(Object.keys(conf.rules).every((name) => conf.rules[name] === 'off'));

  const rule = 'no-extra-semi';
  const code = await fsPromises.readFile(
    path.resolve(__dirname, '../test-lint/index.js'),
    { encoding: 'utf8' }
  );
  const config = {
    parserOptions,
    extends: ['eslint:recommended'],
  };

  t.true(hasRule(await runEslint(code, config), rule));

  config.extends.push(path.resolve(__dirname, '../index.js'));
  t.false(hasRule(await runEslint(code, config), rule));
});

test('@typescript-eslint', async (t) => {
  const conf = require('../@typescript-eslint');

  t.true(isPlainObject(conf));
  t.true(isPlainObject(conf.rules));
  t.true(Object.keys(conf.rules).every((name) => conf.rules[name] === 'off'));

  const rule = '@typescript-eslint/no-extra-non-null-assertion';
  const code = await fsPromises.readFile(
    path.resolve(__dirname, '../test-lint/@typescript-eslint.ts'),
    { encoding: 'utf8' }
  );
  const config = {
    parser: require.resolve('@typescript-eslint/parser'),
    parserOptions,
    extends: ['plugin:@typescript-eslint/recommended'],
  };

  t.true(hasRule(await runEslint(code, config), rule));

  config.extends.push(path.resolve(__dirname, '../@typescript-eslint.js'));
  t.false(hasRule(await runEslint(code, config), rule));
});

test('ava', async (t) => {
  const conf = require('../ava');

  t.true(isPlainObject(conf));
  t.true(isPlainObject(conf.rules));
  t.true(Object.keys(conf.rules).every((name) => conf.rules[name] === 'off'));

  const rule = 'ava/no-incorrect-deep-equal';
  const code = await fsPromises.readFile(
    path.resolve(__dirname, '../test-lint/ava.js'),
    { encoding: 'utf8' }
  );
  const config = {
    parserOptions,
    extends: ['plugin:ava/recommended'],
  };

  t.true(hasRule(await runEslint(code, config), rule));

  config.extends.push(path.resolve(__dirname, '../ava.js'));
  t.false(hasRule(await runEslint(code, config), rule));
});

test('@babel', async (t) => {
  const conf = require('../@babel');

  t.true(isPlainObject(conf));
  t.true(isPlainObject(conf.rules));
  t.true(Object.keys(conf.rules).every((name) => conf.rules[name] === 'off'));

  const rule = '@babel/semi';
  const code = await fsPromises.readFile(
    path.resolve(__dirname, '../test-lint/@babel.js'),
    { encoding: 'utf8' }
  );
  const config = {
    parser: require.resolve('@babel/eslint-parser'),
    parserOptions,
    plugins: ['@babel'],
    rules: {
      [rule]: 'error',
    },
  };

  t.true(hasRule(await runEslint(code, config), rule));

  config.rules = {
    ...config.rules,
    ...conf.rules,
  };
  t.false(hasRule(await runEslint(code, config), rule));
});

test('flowtype', async (t) => {
  const conf = require('../flowtype');

  t.true(isPlainObject(conf));
  t.true(isPlainObject(conf.rules));
  t.true(Object.keys(conf.rules).every((name) => conf.rules[name] === 'off'));

  const rule = 'flowtype/boolean-style';
  const code = await fsPromises.readFile(
    path.resolve(__dirname, '../test-lint/flowtype.js'),
    { encoding: 'utf8' }
  );
  const config = {
    parser: require.resolve('@babel/eslint-parser'),
    parserOptions,
    extends: ['plugin:flowtype/recommended'],
  };

  t.true(hasRule(await runEslint(code, config), rule));

  config.extends.push(path.resolve(__dirname, '../flowtype.js'));
  t.false(hasRule(await runEslint(code, config), rule));
});

test('import', async (t) => {
  const conf = require('../import');

  t.true(isPlainObject(conf));
  t.true(isPlainObject(conf.rules));
  t.true(Object.keys(conf.rules).every((name) => conf.rules[name] === 'off'));

  const rule = 'import/newline-after-import';
  const code = await fsPromises.readFile(
    path.resolve(__dirname, '../test-lint/import.js'),
    { encoding: 'utf8' }
  );
  const config = {
    parserOptions,
    plugins: ['import'],
    rules: {
      [rule]: 'error',
    },
  };

  t.true(hasRule(await runEslint(code, config), rule));

  config.rules = {
    ...config.rules,
    ...conf.rules,
  };
  t.false(hasRule(await runEslint(code, config), rule));
});

test('prettier', async (t) => {
  const conf = require('../prettier');

  t.true(isPlainObject(conf));
  t.true(isPlainObject(conf.rules));
  t.true(Object.keys(conf.rules).every((name) => conf.rules[name] === 'off'));

  const rule = 'prettier/prettier';
  const code = await fsPromises.readFile(
    path.resolve(__dirname, '../test-lint/prettier.js'),
    { encoding: 'utf8' }
  );
  const config = {
    parserOptions,
    extends: ['plugin:prettier/recommended'],
  };

  t.true(hasRule(await runEslint(code, config), rule));

  config.extends.push(path.resolve(__dirname, '../prettier.js'));
  t.false(hasRule(await runEslint(code, config), rule));
});

test('react', async (t) => {
  const conf = require('../react');

  t.true(isPlainObject(conf));
  t.true(isPlainObject(conf.rules));
  t.true(Object.keys(conf.rules).every((name) => conf.rules[name] === 'off'));

  const rule = 'react/self-closing-comp';
  const code = await fsPromises.readFile(
    path.resolve(__dirname, '../test-lint/react.js'),
    { encoding: 'utf8' }
  );
  const config = {
    parserOptions: {
      ...parserOptions,
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: ['react'],
    rules: {
      [rule]: 'error',
    },
  };

  t.true(hasRule(await runEslint(code, config), rule));

  config.rules = {
    ...config.rules,
    ...conf.rules,
  };
  t.false(hasRule(await runEslint(code, config), rule));
});

test('unicorn', async (t) => {
  const conf = require('../unicorn');

  t.true(isPlainObject(conf));
  t.true(isPlainObject(conf.rules));
  t.true(Object.keys(conf.rules).every((name) => conf.rules[name] === 'off'));

  const rule = 'unicorn/escape-case';
  const code = await fsPromises.readFile(
    path.resolve(__dirname, '../test-lint/unicorn.js'),
    { encoding: 'utf8' }
  );
  const config = {
    parserOptions,
    extends: ['plugin:unicorn/recommended'],
  };

  t.true(hasRule(await runEslint(code, config), rule));

  config.extends.push(path.resolve(__dirname, '../unicorn.js'));
  t.false(hasRule(await runEslint(code, config), rule));
});

test('vue', async (t) => {
  const conf = require('../vue');

  t.true(isPlainObject(conf));
  t.true(isPlainObject(conf.rules));
  t.true(Object.keys(conf.rules).every((name) => conf.rules[name] === 'off'));

  const rule = 'vue/attribute-hyphenation';
  const code = await fsPromises.readFile(
    path.resolve(__dirname, '../test-lint/vue.vue'),
    { encoding: 'utf8' }
  );
  const config = {
    extends: ['plugin:vue/recommended'],
  };

  t.true(hasRule(await runEslint(code, config), rule));

  config.extends.push(path.resolve(__dirname, '../vue.js'));
  t.false(hasRule(await runEslint(code, config), rule));
});
