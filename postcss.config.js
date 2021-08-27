module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  plugins: [
    [
      'postcss-preset-env',
      require('postcss-import'),
      require('tailwindcss')('./tailwind.config.js'),
      require('autoprefixer'),
    ],
  ],
};
