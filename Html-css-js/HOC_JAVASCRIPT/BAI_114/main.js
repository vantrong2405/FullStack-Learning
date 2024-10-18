const numbers = [1, 2, 3, 4, 5];

// var sum = numbers.reduce(function (total, currentValue) {
//     return total + currentValue;
// })
Array.prototype.reduce2 = function (callback, result) {
    var i = 0;
    if (arguments.length < 2) {
        i = 1;
        result = this[0];
    }
    for (; i < numbers.length; i++) {
        result = callback(result, numbers[i], i, numbers);
    }
    return result;
}
var sum = numbers.reduce2(function (total, currentValue) {
    return total + currentValue;
}, 0 );
console.log(sum);