/**
 * @param {string} s
 * @return {boolean}
 */

var validPalindrome = function (s) {

    let l = 0
    let r = s.length - 1
    while (l < r) {
        if (s[l] !== s[r]) {
            return dfs(l + 1, r) || dfs(l, r - 1)
        }
        l++
        r--
    }
    return true

    function dfs(l, r) {
        if (l >= r) return true
        if (s[l] !== s[r]) return false
        return dfs(l + 1, r - 1)
    }
};