### Version 0.22.0 (2021-02-27)

- Removed: [unicorn/prefer-spread].
- Added: [flowtype/object-type-curly-spacing].
- Breaking: switch from [eslint-plugin-babel] to [@babel/eslint-plugin]

### Version 0.21.0 (2021-01-20)

- Added: [unicorn/prefer-regexp-test].
- Added: [@typescript-eslint/object-curly-spacing].

### Version 0.20.0 (2021-01-09)

- Added: [@typescript-eslint/promise-function-async].
- Added: [@typescript-eslint/sort-type-union-intersection-members].

### Version 0.19.1 (2020-12-18)

- Removed: [@typescript-eslint/non-nullable-type-assertion-style] ([#2887]).

### Version 0.19.0 (2020-12-17)

- Added: [@typescript-eslint/non-nullable-type-assertion-style].
- Added: [unicorn/empty-brace-spaces].
- Added: [unicorn/no-lonely-if].
- Added: [unicorn/prefer-date-now].

### Version 0.18.0 (2020-11-24)

- Added: [@typescript-eslint/no-unnecessary-type-constraint].
- Added: [@typescript-eslint/space-infix-ops].
- Removed: [@typescript-eslint/consistent-type-definitions] ([#2739]).

### Version 0.17.0 (2020-10-09)

- Added: [@typescript-eslint/consistent-indexed-object-style].

### Version 0.16.0 (2020-09-29)

- Added: [@typescript-eslint/comma-dangle].

### Version 0.15.0 (2020-07-18)

- Added: [@typescript-eslint/ban-tslint-comment].
- Added: [@typescript-eslint/lines-between-class-members].
- Added: [unicorn/no-useless-undefined].
- Added: [unicorn/prefer-optional-catch-binding].

### Version 0.14.0 (2020-04-28)

- Added: [@typescript-eslint/dot-notation].

### Version 0.13.0 (2020-04-23)

- Added: [@typescript-eslint/keyword-spacing].

### Version 0.12.0 (2020-04-19)

- Added: [@typescript-eslint/prefer-reduce-type-parameter].

### Version 0.11.0 (2020-02-16)

- Added: [vue/padding-line-between-blocks].

### Version 0.10.0 (2020-02-04)

- Added: [@typescript-eslint/no-extra-non-null-assertion].
- Added: [@typescript-eslint/no-unnecessary-boolean-literal-compare].

### Version 0.9.0 (2020-01-28)

- Added: [@typescript-eslint/comma-spacing].

### Version 0.8.0 (2019-12-29)

- Added: [vue/component-definition-name-casing].
- Added: [vue/no-deprecated-slot-attribute].
- Added: [vue/no-deprecated-slot-scope-attribute].
- Added: [vue/static-class-names-order].

### Version 0.7.0 (2019-12-24)

- Added: [@typescript-eslint/no-extra-semi].

### Version 0.6.0 (2019-11-29)

- Added: [unicorn/prefer-negative-index].
- Removed: [unicorn/regex-shorthand] ([#447]).

### Version 0.5.0 (2019-11-23)

- Removed: [array-bracket-newline], [array-element-newline], [function-call-argument-newline], [function-paren-newline], [object-curly-newline] (in some case they cannot be fixed automatically, e.g. [#12454]).

### Version 0.4.0 (2019-11-19)

- Added: [@typescript-eslint/space-before-function-paren].

### Version 0.3.0 (2019-11-18)

- Added: [wrap-iife].
- Added: Support [eslint-plugin-vue v6.0].

### Version 0.2.0 (2019-10-21)

- Initial release.

[#12454]: https://github.com/eslint/eslint/issues/12454
[#2739]: https://github.com/typescript-eslint/typescript-eslint/pull/2739
[#2887]: https://github.com/typescript-eslint/typescript-eslint/issues/2887
[#447]: https://github.com/sindresorhus/eslint-plugin-unicorn/issues/447
[@babel/eslint-plugin]: https://github.com/babel/babel/tree/main/eslint/babel-eslint-plugin
[@typescript-eslint/ban-tslint-comment]: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-tslint-comment.md
[@typescript-eslint/comma-dangle]: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-dangle.md
[@typescript-eslint/comma-spacing]: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md
[@typescript-eslint/consistent-indexed-object-style]: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-indexed-object-style.md
[@typescript-eslint/consistent-type-definitions]: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
[@typescript-eslint/dot-notation]: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md
[@typescript-eslint/keyword-spacing]: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/keyword-spacing.md
[@typescript-eslint/lines-between-class-members]: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/lines-between-class-members.md
[@typescript-eslint/no-extra-non-null-assertion]: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md
[@typescript-eslint/no-extra-semi]: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-semi.md
[@typescript-eslint/no-unnecessary-boolean-literal-compare]: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md
[@typescript-eslint/no-unnecessary-type-constraint]: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-constraint.md
[@typescript-eslint/non-nullable-type-assertion-style]: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/non-nullable-type-assertion-style.md
[@typescript-eslint/object-curly-spacing]: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/object-curly-spacing.md
[@typescript-eslint/prefer-reduce-type-parameter]: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md
[@typescript-eslint/promise-function-async]: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/promise-function-async.md
[@typescript-eslint/sort-type-union-intersection-members]: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/sort-type-union-intersection-members.md
[@typescript-eslint/space-before-function-paren]: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-function-paren.md
[@typescript-eslint/space-infix-ops]: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-infix-ops.md
[array-bracket-newline]: https://eslint.org/docs/rules/array-bracket-newline
[array-element-newline]: https://eslint.org/docs/rules/array-element-newline
[eslint-plugin-babel]: https://github.com/babel/eslint-plugin-babel
[eslint-plugin-vue v6.0]: https://github.com/vuejs/eslint-plugin-vue/releases/tag/v6.0.0
[flowtype/object-type-curly-spacing]: https://github.com/gajus/eslint-plugin-flowtype#object-type-curly-spacing
[function-call-argument-newline]: https://eslint.org/docs/rules/function-call-argument-newline
[function-paren-newline]: https://eslint.org/docs/rules/function-paren-newline
[object-curly-newline]: https://eslint.org/docs/rules/object-curly-newline
[unicorn/empty-brace-spaces]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/empty-brace-spaces.md
[unicorn/no-lonely-if]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-lonely-if.md
[unicorn/no-useless-undefined]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/no-useless-undefined.md
[unicorn/prefer-date-now]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-date-now.md
[unicorn/prefer-negative-index]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-negative-index.md
[unicorn/prefer-optional-catch-binding]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-optional-catch-binding.md
[unicorn/prefer-regexp-test]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-regexp-test.md
[unicorn/prefer-spread]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/prefer-spread.md
[unicorn/regex-shorthand]: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/regex-shorthand.md
[vue/component-definition-name-casing]: https://eslint.vuejs.org/rules/component-definition-name-casing.html
[vue/no-deprecated-slot-attribute]: https://eslint.vuejs.org/rules/no-deprecated-slot-attribute.html
[vue/no-deprecated-slot-scope-attribute]: https://eslint.vuejs.org/rules/no-deprecated-slot-scope-attribute.html
[vue/padding-line-between-blocks]: https://eslint.vuejs.org/rules/padding-line-between-blocks.html
[vue/static-class-names-order]: https://eslint.vuejs.org/rules/static-class-names-order.html
[wrap-iife]: https://eslint.org/docs/rules/wrap-iife
