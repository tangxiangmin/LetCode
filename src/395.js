/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
    const n = s.length
    if (k === 1) return n
    function find(i) {
        let l = i
        let r = i
        const map = {}
        let cnt = 0 // 有cnt种字符串长度达标
        let chars = 0 // 窗口内有chars种字符
        let ans = 0 // 子串的最大长度
        while (r < n) {
            const ch = s[r]
            if (!map[ch]) {
                map[ch] = 0
                chars++
            }
            map[ch]++
            if (map[ch] === k) {
                cnt++
            }
            if (chars === cnt) {
                let j = r + 1
                while (map[s[j]] >= k) {
                    j++
                }
                ans = Math.max(ans, j - l)
            }
            r++
        }
        return ans
    }
    let max = 0
    for (let i = 0; i < n; ++i) {
        max = Math.max(find(i), max)
    }
    return max
};

var s = "aaabb", k = 3
s = "ababbc", k = 2
var ans = longestSubstring(s, k)
console.log(ans)