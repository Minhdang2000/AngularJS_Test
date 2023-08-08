(function () {
    'use strict';
    
    angular.module('DIApp', [])
    .controller('DIController', DIController);
    
    function DIController ($scope, $filter,$injector) { // scope service
      $scope.name = "MinhDang";

      $scope.upper = function () {
        var upCase = $filter('uppercase');
        $scope.name = upCase($scope.name);
      };
      console.log($injector.annotate(DIController));
    }
    function Anooo(name, job, ssd){
        return 'blah';
    }
    console.log(Anooo.toString());    
})();