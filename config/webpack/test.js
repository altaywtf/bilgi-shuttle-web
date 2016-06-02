var testsContext = require.context("../../app", true, /.test$/);
testsContext.keys().forEach(testsContext);