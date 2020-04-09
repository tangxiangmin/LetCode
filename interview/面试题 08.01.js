/**
 * @param {number} n
 * @return {number}
 */
// 思路：递归
// fn(n) = 最后走一步fn(n-1) + 最后走二步fn(n-2) + 最后走三步fn(n-3)
var waysToStep = function (n) {
    var dp = [];
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 1 + dp[1];
    dp[3] = 1 + dp[1] + dp[2];
    for (var i = 4; i <= n; ++i) {
        dp[i] = (dp[i - 1] + dp[i - 2] + dp[i -3]) % 1000000007;
    }
    return dp[n]
};

