/**
 * @param {number[]} runes
 * @return {number}
 */
// 排序后使用滑动窗口，窗口内的每个元素都满足要求
var runeReserve = function (runes) {
    runes.sort((a, b) => a - b)
    let l = 0
    let r = 0
    const n = runes.length
    let ans = 0
    while (r < n) {
        r++
        ans = Math.max(r - l, ans)
        if (runes[r] - runes[r - 1] > 1) {
            l = r
        }
    }
    return ans
};