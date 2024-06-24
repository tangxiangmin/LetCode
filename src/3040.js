/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function (nums) {

    const n = nums.length

    const cache = new Map()

    const a = dfs(-1, n, nums[0] + nums[n - 1])
    const b = dfs(-1, n, nums[0] + nums[1])
    const c = dfs(-1, n, nums[n - 1] + nums[n - 2])

    return Math.max(a, b, c)

    // 在(l,r)开区间内满足题目要求的最大步骤
    function dfs(l, r, val) {
        const key = `${l},${r},${val}`
        if (cache.has(key)) return cache.get(key)
        if (r - l <= 2) return 0

        const vals = [0]
        if (nums[l + 1] + nums[l + 2] === val) {
            vals.push(1 + dfs(l + 2, r, val))
        }
        if (nums[l + 1] + nums[r - 1] === val) {
            vals.push(1 + dfs(l + 1, r - 1, val))
        }
        if (nums[r - 1] + nums[r - 2] === val) {
            vals.push(1 + dfs(l, r - 2, val))
        }
        const ans = Math.max(...vals)
        cache.set(key, ans)
        return ans
    }
};
var nums = [3, 2, 1, 2, 3, 4]
nums = [3, 2, 6, 1, 4]
nums = [3, 2, 1, 4, 1]
nums = [3, 2, 1, 2, 3, 4]
var ans = maxOperations(nums)
console.log(ans)