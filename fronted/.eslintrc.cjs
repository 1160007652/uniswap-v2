module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': [2],
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    // 'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    // '@typescript-eslint/no-unused-vars': 'never',
    // 'no-unused-vars': 'never',
  },
};
