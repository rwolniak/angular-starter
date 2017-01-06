define(function() {
  function FuseConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }

  return {
    config: function(fuse) {
      fuse.config(FuseConfig);
    }
  }
});