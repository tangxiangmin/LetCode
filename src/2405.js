/**
 * @param {string} s
 * @return {number}
 */
// 贪心 + 滑动窗口
var partitionString = function (s) {

    const n = s.length
    let r = 0
    let ans = 0
    while (r < n) {
        const map = new Map()
        while (r < n && !map.has(s[r])) {
            map.set(s[r], 1)
            r++
        }
        ans++
    }
    return ans
};