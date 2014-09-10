'use strict';

var math = {};

// Returns the average value from an array of numbers.
math.mean = function(numbers) {
    var sum = 0;

    numbers.forEach(function(number) {
        sum += number;
    });

    return sum / numbers.length;
};

// Returns the middle number of an array.
math.median = function(numbers) {

    // Sort in ascending order.
    numbers.sort(function (a, b) { return a - b; });

    var middle = Math.floor(numbers.length / 2);

    // If there is an even amount of numbers
    if(numbers.length % 2 === 0) {
        // Find the median by averaging the two middle numbers.
        return ((numbers[middle] + numbers[middle + 1]) / 2);
    } else {
        return numbers[middle];
    }
};

// Returns the most common number in an array or false if no element is repeated.
math.mode = function(numbers) {
    var bucket = {};
    var maxCount = 0;
    var result = null;

    numbers.forEach(function(number) {
        // Initialze the number count to 0, then increment it after subsequent hits.
        bucket[number] = (bucket[number] ? bucket[number] : 0) + 1;

        if(bucket[number] > maxCount) {
            result = number;
            maxCount = bucket[number];
        }
    });

    return result || false;
};

module.exports = math;