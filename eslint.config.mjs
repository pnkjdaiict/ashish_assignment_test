module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for modern ECMAScript features
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],
  rules: {
    // Disable the rule for explicit any throughout the project
    '@typescript-eslint/no-explicit-any': 'off',
    // Alternatively, if you want a warning instead of an error, you can use:
    // '@typescript-eslint/no-explicit-any': 'warn',
  },
};
export default {
  extends: ["next", "eslint:recommended", "plugin:@typescript-eslint/recommended"],
};
