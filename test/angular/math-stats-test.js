'use strict';

require('../../app/js/app.js');
require('angular-mocks');

describe('Statistics service', function() {
    var stats;

    beforeEach(angular.mock.module('calculatorApp'));

    beforeEach(angular.mock.inject(function(statistics) {
        stats = statistics;
    }));

    it('should have a mean method', function() {
        expect(stats.mean).toBeDefined();
    });

    it('should have a median method', function() {
        expect(stats.mean).toBeDefined();
    });

    it('should have a mode method', function() {
        expect(stats.mean).toBeDefined();
    });

    describe('mean()', function() {
        it('should return the mean of an array of numbers', function() {
            var data = [1, 2, 3, 2];
            expect(stats.mean(data)).toEqual(2);
        });
    });

    describe('median()', function() {
        it('should return the middle number for an array with an odd amount of numbers', function() {
            var data = [1, 2, 3, 4, 5];
            expect(stats.median(data)).toEqual(3);
        });

        it('should return the average of two middle numbers for an array with an even amount of numbers', function() {
            var data = [1, 2] ;
            expect(stats.median(data)).toEqual(1.5);
        });
    });

    describe('mode()', function() {
        it('should return the most common number in an array', function() {
            var data = [1, 2, 3, 2];
            expect(stats.mode(data)).toEqual(2);
        });

        it('should return false if no number in the array is repeated', function() {
            var data = [1, 2, 3, 4];
            expect(stats.mode(data)).toEqual(false);
        });
    });
});