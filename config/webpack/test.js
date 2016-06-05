require('es6-promise').polyfill();
require('whatwg-fetch');

var testsContext = require.context("../../app", true, /.test$/);
testsContext.keys().forEach(testsContext);
