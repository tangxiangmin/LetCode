/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// 下面两种解法都会超时
var myPow = function (x, n) {
    if (n < 0) {
        return 1 / myPow(x, -n)
    }
    if (n === 0) return 1
    if (n === 1) return x
    return x * myPow(x, Math.abs(n) - 1)
};

var myPow = function (x, n) {
    if (n === 0) return 1
    var ans = 1
    const len = Math.abs(n)
    for (var i = 1; i <= len; ++i) {
        ans *= x
    }
    return n < 0 ? 1 / ans : ans
}
// 需要使用快速幂

var myPow = function (x, n) {
    function quickMul(x, n) {
        if (n === 0) return 1
        const y = quickMul(x, Math.floor(n / 2))
        return n % 2 === 0 ? y * y : y * y * x
    }
    return n >= 0 ? quickMul(x, n) : 1 / quickMul(x, -n)
}


var x = 2.00000, n = -2
// x = 0.00001, n = 2147483647
// x = 2.00000, n = 10
var ans = myPow(x, n)
console.log(ans)