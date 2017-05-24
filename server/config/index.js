var _ = require("lodash");
var defaults = require("./default.js");
<<<<<<< HEAD
var config = require("./" + (process.env.NODE_ENV || "development") + ".js");
// var config = require("./production.js"); // a test for production
=======
// var config = require("./" + (process.env.NODE_ENV || "development") + ".js");//local database
var config = require("./testing.js"); //online database
>>>>>>> aa29a1ab486724ea42c1af3ed96ad8b2add38013
module.exports = _.merge({}, defaults, config);