/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
    var prev = 0;
    for (var i = 0; i < n; ++i) {
        prev ^= start + 2 * i;
    }
    return prev;
};

var n = 5,
    start = 0;
    n = 4, start = 3
    n = 1, start = 7
var ans = xorOperation(n, start);

console.log(ans);
