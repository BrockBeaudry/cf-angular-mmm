'use strict';

require('../../app/js/app.js');
require('angular-mocks');

describe('CalcController', function() {
    var $controllerConstructor;
    var scope;

    beforeEach(angular.mock.module('calculatorApp'));

    beforeEach(angular.mock.inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        $controllerConstructor = $controller;
    }));

    beforeEach(function() {
        this.calcController = $controllerConstructor('calculatorController', { $scope: scope });
    });

    it('should be able to create a new controller', function() {
        expect(typeof this.calcController).toBe('object');
    });

    it('should have a math property', function() {
        expect(scope.math).toBeDefined();
    });

    it('should have a calculator property', function() {
        expect(scope.calculator).toBeDefined();
    });

    it('should have a "calculate" method', function() {
        expect(scope.calculate).toBeDefined();
        expect(typeof scope.calculate).toBe('function');
    });

    it('should parse the math service into operations on the calculator model', function() {
        expect(scope.calculator.operations.length).toBeGreaterThan(1);
        expect(typeof scope.calculator.operations[0].name).toBe('string');
        expect(typeof scope.calculator.operations[0].action).toBe('function');
        expect(scope.calculator.operations[0].use).toEqual(true);
    });

    describe('calculate()', function() {
        it('should add a result to the calculator model', function() {
            scope.calculate([1, 1, 1]);
            expect(scope.calculator.results.length).toEqual(1);
        });
    });
});