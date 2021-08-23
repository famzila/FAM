// When no targets are specified: Babel will assume you are targeting the oldest browsers possible.
// For example, @babel/preset-env will transform all ES2015-ES2020 code to be ES5 compatible
module.exports = {
  presets: [
    '@babel/preset-env',
    // Runtime automatic with React 17+ allows not importing React
    // in files only using JSX (no state or React methods)
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
};
