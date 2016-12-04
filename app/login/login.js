/**
 * Created by BHARATH on 12/10/2016.
 */

angular.module('webApp.login', ['ngRoute','ngMaterial'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', ['$scope', '$location',function($scope,$location) {
    $scope.login = function () {
        console.log("fuck off");
        $location.path("/welcome");
    }
    $scope.user = {
        email: 'bharath@gmail.com',
        password: '1234'
    };
}]);