/**
 * @param {number} num
 * @return {number}
 */
// dp[i] = dp[i-1] + dp[i-2]
// dp[0] = 1
// dp[1] = 1
// dp[2] = dp[0] + dp[1]
var trainWays = function (num) {
    const dp = [1, 1,2]
    const mod = 1000000007

    for (let i = 3; i <= num; ++i) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % mod
    }
    return dp[num]

};