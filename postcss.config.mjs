/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
  rules: {
    // Disable the rule for explicit any throughout the project
    '@typescript-eslint/no-explicit-any': 'off',
    // Alternatively, if you want a warning instead of an error, you can use:
    // '@typescript-eslint/no-explicit-any': 'warn',
  },
};

export default config;
