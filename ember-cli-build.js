/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  app.import("vendor/bootstrap.min.css");
  app.import("vendor/animate.css");
  app.import("vendor/urw_bookman.css");
  app.import("vendor/urw_chancery.css");
  app.import("vendor/type/urw_bookman/urw-bookman-l-light-italic.ttf", {destDir:'assets/type/urw_bookman'});
  app.import("vendor/type/urw_bookman/urw-bookman-l-light-italic.eot", {destDir:'assets/type/urw_bookman'});
  app.import("vendor/type/urw_chancery/urw-chancery-l-medium-italic.ttf", {destDir:'assets/type/urw_chancery'});
  app.import("vendor/type/urw_chancery/urw-chancery-l-medium-italic.eot", {destDir:'assets/type/urw_chancery'});

  app.import("vendor/js/bootstrap.min.js");
  app.import("vendor/js/jquery.easings.min.js");
  app.import("vendor/js/jquery.countdown.js");
  app.import("vendor/js/contact_me.js");
  app.import("vendor/js/notifyMe.js");
  app.import("vendor/js/jquery.placeholder.js");

  app.import("bower_components/multiscroll.js/jquery.multiscroll.css");
  app.import("bower_components/multiscroll.js/jquery.multiscroll.js");

  return app.toTree();
};
