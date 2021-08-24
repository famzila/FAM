
// autoprefixer: PostCSS plugin to parse CSS and add vendor prefixes to CSS rules using values from Can I Use.
module.exports = {
  plugins: [
    'postcss-preset-env',
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
