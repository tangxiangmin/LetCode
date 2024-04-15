/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    const n = s.length
    const m = { a: 1, e: 1, i: 1, o: 1, u: 1 }
    let ans = 0
    for (let i = 0; i < k; ++i) {
        if (m[s[i]]) {
            ans++
        }
    }
    let cnt = ans
    for (let i = k; i < n; ++i) {
        if (m[s[i - k]]) {
            cnt--
        }
        if (m[s[i]]) {
            cnt++
        }
        ans = Math.max(ans, cnt)
    }
    return ans
};