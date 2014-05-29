# aster-parse-coffee
[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]

> CoffeeScript parser for aster.

## Usage

This is internal module and should be used as part of [aster-parse](https://npmjs.org/package/aster-parse) or [aster-src](https://npmjs.org/package/aster-src).

It uses [CoffeScriptRedux](http://michaelficarra.github.io/CoffeeScriptRedux/) compiler to do it's job.

## API

### parseCoffee(options)

#### options.loc
Type: `Boolean`
Default: `true`

Location tracking (required for source maps).

#### options.optimize
Type: `Boolean`
Default: `false`

Enable CoffeeScript pre-optimization.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

[npm-url]: https://npmjs.org/package/aster-parse-coffee
[npm-image]: https://badge.fury.io/js/aster-parse-coffee.png

[travis-url]: http://travis-ci.org/asterjs/aster-parse-coffee
[travis-image]: https://secure.travis-ci.org/asterjs/aster-parse-coffee.png?branch=master
