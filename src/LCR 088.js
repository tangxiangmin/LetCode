/**
 * @param {number[]} cost
 * @return {number}
 */
// dp[i]表示达到第i个楼梯的最小花费，题目答案即dp[n]
// dp[i] = cost[i] + min(dp[i-1], dp[i-2])
// dp[0] = cost[0]
// dp[1] = cost[1]
var minCostClimbingStairs = function (cost) {
    const n = cost.length
    const dp = new Array(n + 1).fill(0)
    dp[0] = cost[0]
    dp[1] = cost[1]
    cost[n] = 0 // 达到楼梯顶部没有额外花费
    for (let i = 2; i <= n; ++i) {
        dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2])
    }
    return dp[n]
};