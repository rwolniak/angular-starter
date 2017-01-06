define([
  './home.module'
], function() {
	angular.module('app.home')
		.controller('HomeCtrl', HomeCtrl);
	function HomeCtrl(){
		var vm = this;
	}
});