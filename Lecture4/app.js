(function () {
'use strict';

angular.module('myFirstApp', [])


.controller('MyFirstController', function ($scope) {
    $scope.name = "Dang";
    $scope.sayHello = function()
    {
        return "Hello";
    };

});

})();

