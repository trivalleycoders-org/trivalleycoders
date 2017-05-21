const Dotenv = require('dotenv-webpack');//maybe this file should not be there
var webpack = require('webpack');
console.log("webpack");
module.exports = {
  plugins: [
    new Dotenv({
      path: './.env', // Path to .env file (this is the default) 
      safe: true // load .env.example (defaults to "false" which does not use dotenv-safe) 
    })
  ]
};