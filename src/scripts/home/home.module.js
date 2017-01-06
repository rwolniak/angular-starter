define([
  'text!./templates/home.html',
  'angular'
], function(homeTpl) {
  angular.module('app.home', []).config(HomeConfig);

  function HomeConfig($stateProvider, $httpProvider) {
    $stateProvider.state({
      cache: false,
      name: 'home',
      url: '/',
      controller: 'HomeCtrl',
      controllerAs: 'homeVm',
      template: homeTpl
    });
  }
});