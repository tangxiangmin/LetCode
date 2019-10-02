/**
 * @param {number} n
 * @return {number}
 * 质因数 就是一个数的约数，并且是质数。
 */
var nthUglyNumber = function (n) {
    var arr = [1]
    var idx2 = 0
    var idx3 = 0
    var idx5 = 0
    for (var i = 0; i < n - 1; ++i) {
        arr.push(Math.min(arr[idx2] * 2, arr[idx3] * 3, arr[idx5] * 5))
        var last = arr[arr.length - 1]
        // 找到最近的倍数
        if (last == arr[idx2] * 2) {
            idx2 += 1
        }
        if (last == arr[idx3] * 3) {
            idx3 += 1
        }
        if (last == arr[idx5] * 5) {
            idx5 += 1
        }
    }
    return arr[arr.length - 1]
};

var n = 10 // 12
var res = nthUglyNumber(n)
console.log(res)