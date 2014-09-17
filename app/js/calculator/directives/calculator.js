'use strict';

module.exports = function(app) {
    app.directive('calculator', function() {
        var directive = {
            restrict: 'EAC',
            templateUrl: 'views/calculator.html'
        };

        return directive;
    });
};