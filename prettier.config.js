const styleguide = require('@vercel/style-guide/prettier');

module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 80,
  overrides: [
    {
      files: '.prettierrc',
      options: { parser: 'json' },
    },
  ],
  ...styleguide,
  plugins: [...styleguide.plugins, 'prettier-plugin-tailwindcss'],
};
