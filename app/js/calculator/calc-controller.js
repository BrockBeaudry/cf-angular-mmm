'use strict';

module.exports = function(app) {
    app.controller('calculatorController', ['$scope', 'math', function($scope, math) {

        $scope.math = math;
        $scope.calculator = {};
        $scope.calculator.operations = [];
        $scope.calculator.results = [];

        for(var key in $scope.math) {
            $scope.calculator.operations.push({name: key, action: math[key],
                use: true});
        }

        $scope.calculate = function(input) {
            var results = {};

            results.data = input.map(Number);

            $scope.calculator.operations.forEach(function(operation) {
                if (operation.use) {
                    results[operation.name] = math[operation.name](results.data);
                }
            });

            $scope.calculator.results.push(results);
        };
    }]);
};