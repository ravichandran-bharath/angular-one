/**
 * Created by BHARATH on 12/10/2016.
 */

angular.module('webApp.welcome', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/welcome', {
    templateUrl: 'welcome/welcome.html',
    controller: 'WelcomeCtrl'
  });
}])

.controller('WelcomeCtrl', [function() {

}]);
