/**
 * @param {number} n
 * @return {number}
 */
// 思路
// dp[n] = (dp[n-25] + dp[25]) + (dp[n-10] + dp[10]) + (dp[n-5] + dp[5])  + dp[n-1]
var waysToChange = function (n) {
    var dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    var coins = [25, 10, 5, 1];
    for (var coin of coins) {
        for (var i = coin; i <= n; ++i) {
            // 选择1个coin，则有dp[i - coin]种方式
            dp[i] = (dp[i] + dp[i - coin]) % 1000000007;
        }
    }
    return dp[n];
};
var n = 5;
n = 10;
var res = waysToChange(n);
console.log(res);
