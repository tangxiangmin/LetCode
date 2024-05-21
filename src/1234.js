/**
 * @param {string} s
 * @return {number}
 */
// 目标子字符串中，剩余字符的数量都要<=n/4
var balancedString = function (s) {

    const n = s.length
    const p = n / 4

    const map = {}

    for (const ch of s) {
        if (!map[ch]) map[ch] = 0
        map[ch]++
    }
    if (check()) return 0

    let l = 0
    let r = 0
    let ans = n
    // 滑动窗口外的数据需要满足条件，即所有字符的数量都要<=n/4，窗口的长度就是需要移除的长度
    while (l < n) {
        while (r < n && !check()) {
            map[s[r]]--
            r++
        }
        if (!check()) {
            break
        }
        ans = Math.min(ans, r - l)
        map[s[l]]++
        l++
    }

    return ans

    // 判断左右剩余的子串，是否满足条件
    function check() {
        for (const key in map) {
            if (map[key] > p) return false
        }
        return true
    }
};
var s = "QQWE"
s = "QQQW"
// s = "QQQQ"
s = "WQWRQQQW"
var ans = balancedString(s)
console.log(ans)