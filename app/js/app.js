'use strict';

require('angular/angular');
require('angular-route');

var calculatorApp = angular.module('calculatorApp', ['ngRoute']);

// Controllers
require('./calculator/calc-controller')(calculatorApp);

// Services
require('./calculator/services/math-stats')(calculatorApp);

// Directives
require('./calculator/directives/calculator')(calculatorApp);

calculatorApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/calculator', {
      templateUrl: 'views/calculator.html',
      controller: 'calculatorController'
    })
    .otherwise({
      redirectTo: '/calculator'
    });
}]);