/**
 * @param {number[]} nums
 * @return {boolean}
 */

// 思路，先计算每个子数组的和sum，然后判断是否可以从数组中找到某个子序列其和为sum
var canPartition = function (nums) {
    const total = nums.reduce((acc, num) => acc + num, 0)
    if (total % 2 === 1) return false
    const sum = total / 2
    const n = nums.length

    const cache = new Array(n + 1).fill(0).map(() => new Array(sum + 1))

    return dfs(0, 0)

    function dfs(i, target) {
        if (i === n) return false
        if (target > sum) return false
        if (target === sum) return true

        if (cache[i][target] !== undefined) return cache[i][target]

        const a = dfs(i + 1, target + nums[i])
        const b = dfs(i + 1, target)
        return cache[i][target] = a || b
    }
}

// 递推
var canPartition = function (nums) {
    const total = nums.reduce((acc, num) => acc + num, 0)
    if (total % 2 === 1) return false
    const sum = total / 2
    const n = nums.length

    const f = new Array(n + 1).fill(0).map(() => new Array(sum + 1).fill(false))

    f[0][0] = true
    for (let i = 0; i < n; ++i) {
        const num = nums[i]
        for (let x = 0; x <= sum; ++x) {
            if (x < num) {
                f[i + 1][x] = f[i][x]
            } else {
                f[i + 1][x] = f[i][x - num] || f[i][x]
            }
        }
    }
    return f[n][sum]
}
// 还可以进一步优化，dp[n]表示是否可以组成和为n的子数组，则dp[n] = dp[n-x] x表示枚举nums中所有数字 
var canPartition = function (nums) {
    const total = nums.reduce((acc, num) => acc + num, 0)
    if (total % 2 === 1) return false
    const sum = total / 2
    const dp = new Array(sum + 1).fill(false)

    dp[0] = true

    for (const num of nums) {
        for (let j = sum; j >= num; --j) {
            dp[j] = dp[j] || dp[j - num]
        }
    }
    return dp[sum]
}

var nums = [1, 5, 11, 5]
nums = [3, 3, 3, 4, 5]
// nums = [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 99, 97]
var ans = canPartition(nums)
console.log(ans)