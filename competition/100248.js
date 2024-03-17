/**
 * @param {string} s
 * @return {boolean}
 */
var isSubstringPresent = function (s) {
    const map = {}

    for (let i = 0; i < s.length - 1; ++i) {
        const a = s[i]
        const b = s[i + 1]
        map[a + b] = true
    }
    for (let i = s.length - 1; i > 0; --i) {
        const c = s[i]
        const d = s[i - 1]
        if (map[c + d]) {
            return true
        }
    }
    return false

};

var s = "leetcode"
// s = "abcba"
// s = "abcd"
var ans = isSubstringPresent(s)
console.log(ans)
