/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function (n) {

    for (let i = 2; i <= n - 2; ++i) {
        if (!check(n.toString(i))) return false
    }
    return true

    function check(str) {
        let l = 0
        let r = str.length - 1
        while (l < r) {
            if (str[l] !== str[r]) return false
            l++
            r--
        }
        return true
    }
};
var n = 9
var ans = isStrictlyPalindromic(n)
console.log(ans)