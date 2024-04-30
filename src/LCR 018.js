/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let l = 0
    let r = s.length - 1
    const re = /[A-Za-z0-9]/
    while (l < r) {
        while (!re.test(s[l])) l++
        while (!re.test(s[r])) r--
        if (l >= r) break
        if (s[l].toLowerCase() !== s[r].toLowerCase()) return false
        l++
        r--
    }
    return true
};