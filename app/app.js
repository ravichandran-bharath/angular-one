'use strict';

// Declare app level module which depends on views, and components
angular.module('webApp', ['ngRoute','ngMaterial','webApp.login','webApp.welcome'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/login'});
}]);
