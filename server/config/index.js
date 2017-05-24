var _ = require("lodash");
var defaults = require("./default.js");
var config = require("./" + (process.env.NODE_ENV || "development") + ".js");//local database
// var config = require("./testing.js"); //online database
module.exports = _.merge({}, defaults, config);
