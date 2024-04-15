/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var shortestBeautifulSubstring = function (s, k) {
    const n = s.length
    let r = 0
    while (s[r] === '0' && r < n) {
        r++
    }
    if (r === n) return ''
    let cnt = 0
    let l = r
    let ans = ''
    while (r < n) {
        const ch = s[r]
        if (ch === '1') {
            cnt++
        }
        r++
        if (cnt === k) {
            let str = s.substring(l, r)
            if (ans === '' || ans.length > str.length || (ans.length === str.length && ans > str)) {
                ans = str
            }
            l++
            cnt--
            while (s[l] === '0') {
                l++
            }
        }
    }
    return ans
};
var s = "100011001", k = 3
s = "1011", k = 2
s = "000", k = 1
s = "001110101101101111", k = 10
s = "1100100101011001001", k = 7
var ans = shortestBeautifulSubstring(s, k)
console.log(ans)