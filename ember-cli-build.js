/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  app.import("vendor/bootstrap.min.css");
  app.import("vendor/animate.css");
  app.import("vendor/font-awesome.min.css");
  app.import("vendor/jquery.multiscroll.css");

  return app.toTree();
};
