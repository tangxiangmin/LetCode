/**
 * @param {number} n
 * @return {number}
 */

var pivotInteger = function (n) {
    var sums = [0];
    for (var i = 1; i <= n; ++i) {
        sums[i] = sums[i - 1] + i;
    }
    for (var i = 1; i <= n; ++i) {
        if (sums[i] === sums[n] - sums[i] + i) {
            return i;
        }
    }
    return -1;
};

var n = 8;
n = 1
n = 4
var ans = pivotInteger(n);

console.log(ans);
