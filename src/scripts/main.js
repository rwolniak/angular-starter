require.config({
  paths: {
    'angular': '/bower_components/angular/angular',
    'text': '/bower_components/text/text',
    'ui-router': '/bower_components/angular-ui-router/release/angular-ui-router.min',
    'ui-bootstrap': '/bower_components/angular-bootstrap/ui-bootstrap.min',
    'ui-bootstrap-tpls': '/bower_components/angular-bootstrap/ui-bootstrap-tpls.min'
  },

  shim: {
    'angular': {exports: 'angular'},
    'ui-router': ['angular'],
    'ui-bootstrap': ['angular'],
    'ui-bootstrap-tpls': ['angular']
  }
});

require(['angular', 'app.module'], function(angular) {
  angular.bootstrap(window.document, ['app']);
});