module.exports = {
  plugins: [
    // Use the official Tailwind PostCSS adapter and point it at our config file
    // so the adapter loads the config and content globs correctly.
    require('@tailwindcss/postcss')('./tailwind.config.cjs'),
    require('autoprefixer'),
  ],
};
