/**
 * @param {number} n
 * @return {number}
 */
// 思路，每一轮中，找到左右未等于中间值的数字
var minOperations = function (n) {
    const mid = (1 + 2 * (n - 1) + 1) >> 1
    const len = Math.floor(n / 2)
    let ans = 0
    for (let i = 0; i < len; ++i) {
        const cur = i * 2 + 1
        ans += mid - cur
    }
    return ans
};
var n = 3 // [1,3,5]
n = 4 // [1,3,5,7]
n = 5 // [1,3,5,7,9]
n = 6 // [1,3,5,7,9,11]
var ans = minOperations(n)
console.log(ans)