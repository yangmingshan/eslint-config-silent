# eslint-config-silent [![Actions Status](https://github.com/yangmingshan/eslint-config-silent/workflows/Main%20workflow/badge.svg)](https://github.com/yangmingshan/eslint-config-silent/actions)

ESLint is annoying sometimes, but if a rule is:

- Fully automatic fixable.
- Automatic fix is reliable.
- Against the rule won't case runtime error.

Then why you have to care about it? Just let ESLint do the job, you don't need be bothered.

## Installation

You can install it via [yarn](https://yarnpkg.com) or [npm](https://npmjs.com).
```
$ yarn add eslint-config-silent --dev
$ npm install eslint-config-silent --save-dev
```

## Usage

This config only turns rules off, but you don't want to keep them off all the time, so you should use a environment variable to control it.

`.eslintrc.js`

```js
'use strict';

const config = {
  root: true,
  extends: 'some-other-config-you-use'
};

if (process.env.NODE_ENV !== 'production') {
  config.extends = [
    config.extends,
    'silent'
  ];
}

module.exports = config;
```

And you need a chance to let ESLint fix them, [lint-staged](https://github.com/okonet/lint-staged) is a great tool that allows you to do that.

`package.json`

```json
{
  "lint-staged": {
    "*.js": [
      "cross-env NODE_ENV=production eslint --fix",
      "git add"
    ]
  }
}
```

And that's it, enjoy your silent ESLint ([cross-env](https://github.com/kentcdodds/cross-env) is a tool that set environment variables across platforms).

A few ESLint plugins are supported as well:

- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint)
- [eslint-plugin-ava](https://github.com/avajs/eslint-plugin-ava)
- [eslint-plugin-babel](https://github.com/babel/eslint-plugin-babel)
- [eslint-plugin-flowtype](https://github.com/gajus/eslint-plugin-flowtype)
- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)

Add extra exclusions for the plugins you use like so:

`.eslintrc.js`

```js
'use strict';

const config = {
  root: true,
  extends: 'some-other-config-you-use'
};

if (process.env.NODE_ENV !== 'production') {
  config.extends = [
    config.extends,
    'silent',
    'silent/@typescript-eslint',
    'silent/ava',
    'silent/babel',
    'silent/flowtype',
    'silent/import',
    'silent/prettier',
    'silent/react',
    'silent/unicorn',
    'silent/vue'
  ];
}

module.exports = config;
```

If you extend a config which uses a plugin, it is recommended to add `'silent/that-plugin'` (if available). For example, [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) enables [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) rules, so `'silent/react'` is recommended:

`.eslintrc.js`

```js
'use strict';

const config = {
  root: true,
  extends: 'airbnb'
};

if (process.env.NODE_ENV !== 'production') {
  config.extends = [
    config.extends,
    'silent',
    'silent/react'
  ];
}

module.exports = config;
```

If you’re unsure which plugins are used, you can usually find them in your `package.json`.

## FAQ

### What if someone uses `git commit --no-verify `?

You can set a CI job to lint your code (without `--fix` parameter), so if some code is not fixed, you will know. Like [this repo](https://github.com/yangmingshan/eslint-config-silent/blob/master/.github/workflows/workflow.yml#L12).

### How can I override my custom rules?

You can write `.eslintrc.js` like this:

```js
'use strict';

const silent = require('eslint-config-silent');

const config = {
  root: true,
  extends: 'some-other-config-you-use',
  rules: {
    'your-custom-rule': 'error'
  }
};

if (process.env.NODE_ENV !== 'production') {
  config.rules = [
    ...config.rules,
    ...silent.rules
  ];
}

module.exports = config;
```

## Contributing

If you find a rule should or shouldn't be included in this config, please [open a issue](https://github.com/yangmingshan/eslint-config-silent/issues/new).

## Credits

This config is inspired by [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier).

## License

[MIT](https://opensource.org/licenses/MIT)
