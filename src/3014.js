/**
 * @param {string} word
 * @return {number}
 */
// 思路，每个字符只出现1次
var minimumPushes = function (word) {
    let n = word.length
    const cnt = 8 // 8个按键

    let round = 1
    let ans = 0

    while (n > 0) {
        ans += round * Math.min(n, cnt)
        round++
        n -= cnt
    }

    return ans
};