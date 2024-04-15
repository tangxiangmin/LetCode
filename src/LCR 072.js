/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {

    let l = 1
    let r = x
    while (l < r) {
        const mid = Math.floor((l + r) / 2)
        const val = mid * mid
        if (val === x) {
            return mid
        }
        if (val > x) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    return l * l > x ? l - 1 : l
};
var x = 4
x = 8
// x = 20
x = 2147483647
var ans = mySqrt(x)
console.log(ans)