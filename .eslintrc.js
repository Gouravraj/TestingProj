module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    jasmine: true
  },
  globals: {
    $: true,
    driver: true
  },
  extends: 'eslint:recommended',
  parser: 'babel-eslint'
};
