/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    // a是比较短的那个字符串
    if (a.length > b.length) {
        var tmp = a
        a = b
        b = tmp
    }

    let i = a.length - 1
    let j = b.length - 1

    let ans = ''
    let addon = 0
    while (j >= 0) {
        let val = (i >= 0 ? +a[i] : 0) + +b[j] + addon
        if (val > 1) {
            val = val - 2
            addon = 1
        } else {
            addon = 0
        }
        ans = val + ans
        i--
        j--
    }
    if (addon !== 0) {
        ans = addon + ans
    }
    return ans
};
var a = "11", b = "10"
a = "1010", b = "1011"
a = "1111", b = "1111"
var ans = addBinary(a, b)
console.log(ans)