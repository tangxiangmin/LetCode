/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function (s, t) {
    const n = s.length
    let cnt = 0
    const a = {}
    const b = {}
    for (let i = 0; i < n; ++i) {
        a[s[i]] = i
        b[t[i]] = i
    }
    for (const ch of s) {
        cnt += Math.abs(a[ch] - b[ch])
    }
    return cnt
};

var s = "abc", t = "bac"
s = "rwohu", t = "rwuoh"
// s = "abcde", t = "edbac"
var ans = findPermutationDifference(s, t)
console.log(ans)