/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
    var arr = [0, 1, 1];
    for (var i = 3; i <= n; ++i) {
        arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
    }
    return arr[n];
};
