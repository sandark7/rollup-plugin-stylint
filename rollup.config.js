const packageJson = require('./package.json');

export default {
  entry: 'src/index.js',
  external: Object.keys(packageJson.dependencies),
  targets: [{
    format: 'cjs',
    dest: packageJson['main']
  }, {
    format: 'es',
    dest: packageJson['module']
  }]
};
