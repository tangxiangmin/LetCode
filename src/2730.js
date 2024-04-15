/**
 * @param {string} s
 * @return {number}
 */
// 要求判断子字符串t中至多有一对相邻字符是相等的
var longestSemiRepetitiveSubstring = function (s) {

    let cnt = 0
    let n = s.length
    let l = 0
    let r = 0
    let ans = 0
    while (r < n) {
        const ch = s[r]
        r++
        if (r < n && s[r] === ch) {
            cnt++
        }
        ans = Math.max(ans, r - l)
        if (cnt > 1) {
            while (s[l + 1] != s[l]) {
                l++
            }
            l++
            cnt--
        }

    }
    return ans
};
var s = "52233"
var ans = longestSemiRepetitiveSubstring(s)
console.log(ans)