import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import eslintConfigPrettier from 'eslint-config-prettier'
import pluginReactHooks from 'eslint-plugin-react-hooks'

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintConfigPrettier,
  {
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
        ...globals.es2024,
      },
    },
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    files: ['**/*.{ts,tsx}'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'no-restricted-imports': 'off',
      '@typescript-eslint/no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'lodash',
              message: "Please use 'lodash/DESIRED-MODULE' insted of 'lodash'",
              allowTypeImports: true,
            },
          ],
        },
      ],
      'no-console': 'warn',
      'react/self-closing-comp': 'warn',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
      'react-hooks/exhaustive-deps': 'warn',
      '@typescript-eslint/no-var-requires': 0,
      'no-async-promise-executor': 'off',
      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
        {
          selector: 'typeAlias',
          format: ['PascalCase'],
          prefix: ['T'],
        },
        {
          selector: 'typeParameter',
          format: ['PascalCase'],
          prefix: ['T'],
        },
        {
          selector: 'enum',
          format: ['UPPER_CASE', 'PascalCase'],
          trailingUnderscore: 'allow',
        },
        {
          selector: 'enumMember',
          format: ['UPPER_CASE', 'PascalCase'],
          trailingUnderscore: 'allow',
        },
        {
          selector: 'interface',
          format: ['PascalCase'],
          prefix: ['I'],
        },
      ],
    },
  },
  {
    files: ['src/stories/*'],
    rules: {
      '@typescript-eslint/naming-convention': 'off',
    },
  },
]
