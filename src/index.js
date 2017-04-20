import { createFilter } from 'rollup-pluginutils';
import lint from 'stylint';

export default function stylint(options = {}) {
  const filter = createFilter(
    options.include || '**/*.styl',
    options.exclude || 'node_modules/**'
  );

  return {
    name: 'stylint',

    transform(code, id) {
      if (!filter(id)) {
        return null;
      }

      lint(code, options.config).methods({
        read: function() {
          this.cache.files = [ id ];
          this.parse(null, [ code ]);
        },
        done: function() {
          if (!this.cache.errs.length && !this.cache.warnings.length) {
            return;
          }

          if (this.state.quiet) {
            throw new Error(`Build failed due to:\n${this.cache.msg}`);
          } else {
            let result = [
              ...this.cache.errs,
              ...this.cache.warnings
            ].join('\n\n')

            let output = options.reporter ? this.cache.msg : `\n${result}\n\n${this.cache.msg}\n`;

            console.log(output);
          }
        }
      }).create({}, {
        config: options.configFile,
        strict: options.strict,
        reporter: options.reporter
      });
    }
  }
}
