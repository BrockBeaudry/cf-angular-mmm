'use strict';

require('angular/angular');
require('angular-route');

var math = require('../math');

var calculatorApp = angular.module('calculatorApp', ['ngRoute']);

// Value recipe
calculatorApp.value('math', math);

require('./calculator/calc-controller')(calculatorApp);