define([
  'text!./templates/default-header.html',
  'common/common.module'
], function(defaultHeaderTpl) {
  angular.module('app.common')
      .directive('defaultHeader', defaultHeader);

  function defaultHeader() {
    return {
      restrict: 'E',
      template: defaultHeaderTpl,
      link: function(scope){
      }
    }
  }
});