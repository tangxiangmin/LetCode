// 爬梯子，每阶梯子都有对应的花费，每次可以1步或者2步，可以从0或1开始，求最小的花费

// 思路：动态规划
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    var f1 = 0,
        f2 = 0;
    for (var i = 0; i < cost.length; ++i) {
        var f0 = cost[i] + Math.min(f1, f2);
        f2 = f1;
        f1 = f0;
    }
    return Math.min(f1, f2)
};

// 思路，使用dp[i]表示到第i步的最小花费，dp[0]=0,dp[1]=0，然后然后选择到上面1步或2步的最小花费
var minCostClimbingStairs = function (cost) {
    const dp = []
    dp[0] = 0
    dp[1] = 0
    const len = cost.length
    for (let i = 2; i <= len; ++i) {
        dp[i] = Math.min(dp[i - 2] + cost[i - 2], dp[i - 1] + cost[i - 1])
    }
    return dp[len]
}
var cost = [10, 15, 20]
cost = [1,100,1,1,1,100,1,1,100,1]
var ans = minCostClimbingStairs(cost)
console.log(ans)
