/**
 * @param {string} s
 * @param {character} c
 * @return {number}
 */
// 思路：统计s中c的个数，然后排列组合，开头选择第i个c，结尾选择第j个c，有多少种选择
var countSubstrings = function (s, c) {
    let count = 0
    for (const ch of s) {
        if (ch === c) {
            count++
        }
    }
    if (count === 0) return 0

    let ans = 0

    for (let i = 0; i < count; ++i) {
        ans += count - i
    }
    return ans

};

var s = "abada", c = "a"
s = "zzzzz", c = "z" // 15
// s = "bbbbiz", c = "b"
var ans = countSubstrings(s, c)
console.log(ans)