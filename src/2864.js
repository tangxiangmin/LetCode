/**
 * @param {string} s
 * @return {string}
 */
// 思路，将最后1位变成1，其余的1都排在前面
var maximumOddBinaryNumber = function (s) {
    let n = s.length
    let count = 0
    for (const ch of s) {
        if (ch === '1') {
            count++
        }
    }
    count--
    let ans = ''
    for (let i = 0; i < n - 1; ++i) {
        if (count > 0) {
            ans += '1'
            count--
        } else {
            ans += '0'
        }
    }
    ans += '1'
    return ans
};

var s = "0101"
s = "010"
var ans = maximumOddBinaryNumber(s)
console.log(ans)