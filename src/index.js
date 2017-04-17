import { createFilter } from 'rollup-pluginutils';
// import stylint from 'stylint';

export default function stylint(options = {}) {
  const filter = createFilter(options.include, options.exclude || 'node_modules/**');

  return {
    name: 'stylint',
    transform(code, id) {
      console.log(code, id);
    }
  }
}
