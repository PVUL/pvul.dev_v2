const OFF = 0
const WARN = 1
const ERROR = 2
const NEVER = 'never'

module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', 'prettier', 'import', '@typescript-eslint'],
  extends: [
    'next',
    'airbnb',
    'plugin:react/recommended',
    'plugin:@next/next/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  ignorePatterns: ['node_modules'],
  overrides: [],
  rules: {
    'at-rule-no-unkown': null,
    /**
     * import
     */
    'import/extensions': [
      ERROR,
      'ignorePackages',
      {
        js: NEVER,
        jsx: NEVER,
        ts: NEVER,
        tsx: NEVER,
      },
    ],
    'import/prefer-default-export': OFF,

    /**
     * react
     */
    'react/react-in-jsx-scope': OFF,
    'react/jsx-props-no-spreading': OFF,
    'react/prop-types': [
      WARN,
      {
        skipUndeclared: true,
        ignore: ['style', 'children', 'className', 'theme'],
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: ['arrow-function', 'function-declaration'],
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/no-children-prop': WARN,
    'react/jsx-filename-extension': [WARN, { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-no-useless-fragment': OFF,
    'react/jsx-curly-brace-presence': WARN,

    /**
     * eslint
     */
    'no-unsafe-optional-chaining': WARN,
    'arrow-body-style': OFF,

    /**
     * @typescript-eslint
     */
    '@typescript-eslint/explicit-function-return-type': OFF,
    '@typescript-eslint/prefer-ts-expect-error': OFF,
    '@typescript-eslint/ban-ts-comment': OFF,

    /**
     * jsx/a11y
     */
    'jsx-a11y/anchor-has-content': OFF,
    'jsx-a11y/anchor-is-valid': WARN,
  },

  /**
   * scss
   */
  'at-rule-no-unknown': [
    true,
    {
      ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
    },
  ],
  'declaration-block-trailing-semicolon': null,
  'no-descending-specificity': null,
}
