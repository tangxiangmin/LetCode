/**
 * @param {string} s
 * @return {number}
 */
// 当窗口内刚好包含每种字符最少一个元素时,ans += n - r
var numberOfSubstrings = function (s) {
    const map = {}
    const total = 3 // a、b、c三种字符
    const n = s.length
    let r = 0
    let l = 0
    let cnt = 0
    let ans = 0
    while (r < n) {
        const ch = s[r]
        r++
        if (!map[ch]) {
            map[ch] = 0
            cnt++
        }
        map[ch]++

        while (cnt === total) {
            ans += n - r + 1 // +1代表[l,r)这个子串
            map[s[l]]--
            if (map[s[l]] === 0) {
                cnt--
            }
            l++
        }
    }
    return ans
}

var s = "abcabc"
// s = "aaacb"
s = "abc"
var ans = numberOfSubstrings(s)
console.log(ans)