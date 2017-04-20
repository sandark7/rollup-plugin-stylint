# rollup-plugin-stylint
[![NPM version](https://img.shields.io/npm/v/rollup-plugin-stylint.svg)](https://www.npmjs.com/package/rollup-plugin-stylint)
[![Dependency Status](https://img.shields.io/gemnasium/sandark7/rollup-plugin-stylint.svg)](https://gemnasium.com/sandark7/rollup-plugin-stylint)
[![Code Climate](https://codeclimate.com/github/sandark7/rollup-plugin-stylint/badges/gpa.svg)](https://codeclimate.com/github/sandark7/rollup-plugin-stylint)

[Rollup](https://www.npmjs.com/package/rollup) plugin to lint stylus with [stylint](https://www.npmjs.com/package/stylint)

## Installation

```
npm install rollup-plugin-stylint -D
```

## Usage

``` javascript
import { rollup } from 'rollup';
import stylint from 'rollup-plugin-stylint';

rollup({
  entry: 'index.js',
  plugins: [
    stylint()
  ]
});
```

## Options

### configFile

Specify path to `.stylintrc` file with stylint options.

``` javascript
import { rollup } from 'rollup';
import stylint from 'rollup-plugin-stylint';

rollup({
  entry: 'index.js',
  plugins: [
    stylint({
      configFile: './.stylintrc'
    })
  ]
});
```

### config

Or specify stylint options inline.

``` javascript
import { rollup } from 'rollup';
import stylint from 'rollup-plugin-stylint';

rollup({
  entry: 'index.js',
  plugins: [
    stylint({
      config: {
        brackets: 'always',
        namingConvention: 'BEM',
        semicolons: 'always'
      }
    })
  ]
});
```

Also `config` overrides `configFile` option.

### reporter

You can use custom reporter for better console output.

``` javascript
import { rollup } from 'rollup';
import stylint from 'rollup-plugin-stylint';

rollup({
  entry: 'index.js',
  plugins: [
    stylint({
      reporter: 'stylint-stylish'
    })
  ]
});
```

## License

[MIT](http://www.opensource.org/licenses/mit-license.php) © Andrew Smirnov
