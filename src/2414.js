/**
 * @param {string} s
 * @return {number}
 */
// 滑动窗口
var longestContinuousSubstring = function (s) {
    const n = s.length
    let l = 0
    let r = 1
    let ans = 1
    while (r < n) {
        while (r < n && s[r].charCodeAt(0) - s[r - 1].charCodeAt(0) === 1) {
            r++
        }
        ans = Math.max(ans, r - l)
        l = r
        r++
    }
    return ans
};

// 滑动窗口，一个循环，看起来会更容易理解一点
var longestContinuousSubstring = function (s) {
    const n = s.length
    let l = 0
    let r = 1
    let ans = 1
    while (r < n) {
        if (s[r].charCodeAt(0) - s[r - 1].charCodeAt(0) === 1) {
            ans = Math.max(ans, r - l + 1)
        } else {
            l = r
        }
        r++
    }
    return ans
};
var s = "abacaba"
// s = "abcde"
var ans = longestContinuousSubstring(s)
console.log(ans)