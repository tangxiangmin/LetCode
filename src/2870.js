/**
 * @param {number[]} nums
 * @return {number}
 */
// 贪心，优先使用3，余数使用2
var minOperations = function (nums) {
    const map = {}
    for (const num of nums) {
        if (!map[num]) map[num] = 0
        map[num]++
    }
    let ans = 0
    for (const key in map) {
        const v = map[key]
        if (v <= 1) return -1
        ans += Math.floor(v / 3)
        if (v % 3 === 2) {
            // 剩余2，直接整除
            ans += 1
        } else if (v % 3 === 1) {
            // 剩余1，变成4整除2，除以3的需要减1
            ans--
            ans += 2
        }
    }
    return ans
};