'use strict';

require('angular/angular');
require('angular-route');

var calculatorApp = angular.module('calculatorApp', ['ngRoute']);

require('./calculator/calc-controller')(calculatorApp);
require('./calculator/services/math-stats')(calculatorApp);
