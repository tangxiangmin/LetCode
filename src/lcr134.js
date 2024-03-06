/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// 快速幂
var myPow = function (x, n) {
    if (n === 0) return 1
    if (x === 0) return 0
    if (n < 0) {
        return 1 / myPow(x, -n)
    }
    var y = myPow(x, Math.floor(n / 2))
    return n % 2 === 0 ? y * y : x * y * y
};

var x = 2.00000, n = 10
x = 2.00000, n = -2
var ans = myPow(x, n)
console.log(ans)