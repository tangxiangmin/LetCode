/**
 * @param {string} s
 * @return {string}
 */
var smallestString = function (s) {

    const n = s.length
    let l = 0
    let ans = ''
    while (s[l] === 'a' && l < n) {
        l++
        ans += 'a'
    }
    let stop = false
    let change = false
    for (let i = l; i < n; ++i) {
        if (s[i] === 'a') {
            stop = true
        }
        if (!stop) {
            change = true
            ans += String.fromCharCode(s[i].charCodeAt(0) - 1)
        } else {
            ans += s[i]
        }
    }
    if (!change) {
        return ans.slice(0, n - 1) + 'z'
    }
    return ans
};