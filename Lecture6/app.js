(function (){
'use strict';

angular.module('NameCalculator', [])

.controller('NameCalculatorController', function ($scope) {
  $scope.name = "";
  $scope.totalValue = 0;

  $scope.display = function(){
    var total = calculate($scope.name);
    $scope.totalValue = total;
  };

  function calculate(string){
    var totalstring = 0;
    for (var i = 0; i < string.length; i++)
    {
        totalstring += string.charCodeAt(i);
    }
    return totalstring;
  }
});

}) ();