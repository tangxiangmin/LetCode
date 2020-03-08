/**
 * @param {number} n
 * @return {number}
 */
// dp[i][C]  表示第i步使用Copy时A的个数
// dp[i][P] 表示第i步使用Paste时A的个数
// dp[i][C] = dp[i-1][C] = dp[i-2][P] * 2
// dp[i][P] = dp[i-1][C] * 
var minSteps = function(n) {
    // todo
};

// dp[0] = 1
// dp[1] = 1 // C
// dp[2] = 2 // P
// dp[3] = dp[2][C] || dp[2] + dp[1]  感觉不太对