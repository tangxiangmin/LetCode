/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// dfs记忆化搜索
var findTargetSumWays = function (nums, target) {
    const n = nums.length
    const cache = new Map()
    return dfs(0, 0)
    function dfs(i, c) {
        const key = `${i},${c}`
        if (cache.has(key)) {
            return cache.get(key)
        }
        const cur = nums[i]
        if (i === n - 1) {
            let ans = 0
            // 处理为0的特殊情况
            if (c + nums[i] === target) {
                ans++
            }
            if (c - nums[i] === target) {
                ans++
            }
            return ans
        }
        const ans = dfs(i + 1, c - cur) + dfs(i + 1, c + cur)
        cache.set(key, ans)
        return ans
    }
};
var nums = [1, 1, 1, 1, 1], target = 3
nums = [1], target = 1
nums = [1, 0], target = 1
var ans = findTargetSumWays(nums, target)
console.log(ans)