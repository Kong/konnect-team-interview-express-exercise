module.exports = {
  root: true,
  env: {
    node: true,
    jest: true
  },
  globals: {
    analytics: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'arrow-parens': 'off',
    'eol-last': 'error',
    'generator-star-spacing': 'off',
    'object-property-newline': 'off',
    'lines-between-class-members': ['error', 'always'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['block', 'block-like'], next: '*' },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*'},
      { blankLine: 'any',    prev: ['const', 'let', 'var'], next: ['const', 'let', 'var', 'if']},
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'any',    prev: 'directive', next: 'directive' }
    ],
    'curly': 'error',
    'no-mixed-operators': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'off',

    'no-console': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-trailing-spaces': 'error'
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off'
      }
    }
  ]
}
