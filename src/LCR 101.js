/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 怎么看也不像是个简单题啊
// 问题等价于：从数组中选出一些数字，这些数字的值是整个和的一半
// 对于每个数字，有选择和不选择两种情况，使用dfs模拟即可
var canPartition = function (nums) {
    const total = nums.reduce((acc, num) => acc + num, 0)
    if (total % 2 !== 0) return false
    const half = total / 2

    function dfs(i, sum) {
        if (i >= nums.length) return false
        if (sum > half) return false
        if (sum === half) return true
        return dfs(i + 1, sum) || dfs(i + 1, sum + nums[i + 1])
    }
    return dfs(0, 0) || dfs(0, nums[0])
};

// dfs会超时，但给了我们解决问题的思路
// 可以优化成dp背包问题 dp[i][j]表示从[0,i]范围内存在和为j的组合，则dp[n][target]为1则是题目结果
var canPartition = function (nums) {
    const n = nums.length;
    if (n < 2) {
        return false;
    }
    let sum = 0, maxNum = 0;
    for (const num of nums) {
        sum += num;
        maxNum = maxNum > num ? maxNum : num;
    }
    if (sum & 1) {
        return false;
    }
    const target = Math.floor(sum / 2);
    if (maxNum > target) {
        return false;
    }
    const dp = new Array(n).fill(0).map(v => new Array(target + 1, false));
    for (let i = 0; i < n; i++) {
        dp[i][0] = true;
    }
    dp[0][nums[0]] = true;
    for (let i = 1; i < n; i++) {
        const num = nums[i];
        for (let j = 1; j <= target; j++) {
            if (j >= num) {
                dp[i][j] = dp[i - 1][j] | dp[i - 1][j - num];
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    return dp[n - 1][target];
};


var nums = [1, 5, 11, 5]
nums = [1, 2, 3, 5]
var ans = canPartition(nums)
console.log(ans)