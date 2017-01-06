define([
  'app.config',
  'angular',
  'ui-router',
  'ui-bootstrap',
  'common/index',
  'home/index',
  'ui-bootstrap-tpls'
], function(config) {
  var app = angular.module('app', [
    'ui.router',
    'ui.bootstrap',
    'ui.bootstrap.tpls',
    'app.common',
    'app.home'
  ]);

  config.config(app);
});