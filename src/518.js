/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */

// dfs
var change = function (amount, coins) {
    const n = coins.length
    const memo = new Array(n).fill(0).map(() => new Array(amount + 1).fill(-1))

    return dfs(n - 1, amount)
    // 用前i种硬币组成c的数量
    function dfs(i, c) {
        if (i < 0) {
            return c == 0 ? 1 : 0;
        }
        if (memo[i][c] != -1) {
            return memo[i][c];
        }
        if (c < coins[i]) {
            return memo[i][c] = dfs(i - 1, c);
        }
        return memo[i][c] = dfs(i - 1, c) + dfs(i, c - coins[i]);
    }

}

// dp[i]表示组成金额为i的组合数量，则dp[i] = dp[i-coins[j]] // coins 每样再选择一个对应金额的
var change = function (amount, coins) {
    const dp = new Array(amount + 1).fill(0);
    dp[0] = 1;
    for (const coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] += dp[i - coin];
        }
    }
    return dp[amount];
};

var amount = 5, coins = [1, 2, 5]
var ans = change(amount, coins)
console.log(ans)