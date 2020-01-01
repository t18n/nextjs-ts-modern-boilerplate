module.exports = {
  '*.{ts,tsx,js,jsx}': [
    'prettier --write "**/*.{ts,tsx,js,jsx}"',
    'eslint "**/*.{ts,tsx,js,jsx}"',
    'git add',
  ],
};
