require('es6-promise').polyfill();
require('whatwg-fetch');

var context = require.context('../../app', true, /.test\.tsx?$/);
context.keys().forEach(context);
