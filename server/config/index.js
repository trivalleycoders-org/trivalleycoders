var _ = require("lodash");
var defaults = require("./default.js");
var config = require("./" + (process.env.NODE_ENV || "development") + ".js");
// var config = require("./production.js"); // a test for production
module.exports = _.merge({}, defaults, config);