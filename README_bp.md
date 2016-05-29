# TypeScript + React + Redux

[![Dependency Status](https://david-dm.org/altayaydemir/rr-ts-hmr.svg)]()
[![devDependency Status](https://david-dm.org/altayaydemir/rr-ts-hmr/dev-status.svg)]()

I guess this is not a "boilerplate", it's more like a basic structure with up-to-date dependencies. 
If you are looking for a starter kit with similar dependencies and more features, you can check [barbar/vortigern](https://github.com/barbar/vortigern).

## About
- It uses [Redux](https://github.com/reactjs/redux) as the data layer and [whatwg-fetch](https://github.com/github/fetch) as the Fetch polyfill for API requests.

- At the development process, we use [webpack-dev-server](https://github.com/webpack/webpack-dev-server) with [express](https://github.com/expressjs/express), [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware) and [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware). 

- Typescript code gets transpiled to es5 with [ts-loader](https://github.com/TypeStrong/ts-loader), and [react-hot-loader](https://github.com/gaearon/react-hot-loader) gives hot reloading capability to react components.

- [Typings](https://github.com/typings/typings) makes it easier to find type definitions of external libraries.

## Installation
```bash
$ git clone https://github.com/altayaydemir/rr-ts-hmr
$ cd rr-ts-hmr
$ npm run setup
```

## Usage
```bash
# Running Development Server
$ npm start

# Running Unit Tests with Karma
$ npm run test

# Generating Bundle for Production
$ npm run build

# Clean
$ npm run clean
```

## Deployment
```bash
# Just serve public folder...
```

## Notes
```bash
# If you want install additional libraries, you can also install their typings from DefinitelyTyped
$ typings install dt~<package> --global --save
# or if it's located on npm
$ typings install <package> --save

```
