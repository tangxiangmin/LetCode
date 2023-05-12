/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function (n) {
    var sum = 0;
    for (var i = 1; i <= n; ++i) {
        if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
            sum += i;
        }
    }
    return sum;
};

var n = 7;
n = 10
var ans = sumOfMultiples(n);
console.log(ans);
