/**
 * @param {number[]} nums
 * @return {number}
 */
// 思路：
// 正数的话单个拆分，
// 对于负数，如果前面有一个正数，将其取反；如果前面是一个负数
var maximumTotalCost = function (nums) {
    const n = nums.length
    const cache = new Array(n).fill(0).map(() => new Array(2))

    return dfs(0, 1)

    // flag 为1表示是奇数位，-1表示为偶数位（需要取反）
    function dfs(i, flag) {
        if (i === n) return 0
        if (cache[i][flag]) return cache[i][flag]

        let ans = nums[i] * (flag === 1 ? 1 : -1)
        let max = dfs(i + 1, 1) // i+1单独从奇数位开始

        if (flag === 1) {
            max = Math.max(max, dfs(i + 1, 0))
        }

        return cache[i][flag] = ans + max
    }
};

var nums = [1, -2, 3, 4]
nums = [1, -1, 1, -1]
nums = [0]
nums = [1, -1]
// nums = [-14, -13, -20]

var ans = maximumTotalCost(nums)
console.log(ans)
