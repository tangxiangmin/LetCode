/**
 * @param {number} n
 * @return {number}
 */
// 递归加缓存，由于存在n-1，导致会爆栈
var minDays = function (n) {
    const cache = {}
    return dfs(n)

    function dfs(n) {
        if (cache[n]) return cache[n]
        if (n < 0) return Infinity
        if (n === 0) return 0
        if (n === 1) return 1

        const tasks = []
        if (n % 3 === 0) {
            tasks.push(dfs(n / 3))
        }
        if (n % 2 === 0) {
            tasks.push(dfs(n / 2))
        }
        tasks.push(dfs(n - 1))
        cache[n] = Math.min(...tasks) + 1
        return cache[n]
    }
};

// 改成递推
var minDays = function (n) {
    const dp = new Array(n + 1).fill(Infinity)
    dp[0] = 0
    dp[1] = 1
    for (let i = 1; i <= n; ++i) {
        if (i + 1 <= n) {
            dp[i + 1] = Math.min(dp[i] + 1, dp[i + 1])
        }
        if (i * 2 <= n) {
            dp[i * 2] = Math.min(dp[i] + 1, dp[i * 2])
        }
        if (i * 3 <= n) {
            dp[i * 3] = Math.min(dp[i] + 1, dp[i * 3])
        }
    }
    return dp[n]
}
// 由于n的范围很大，2*10^9，因此还需要优化
// 好像可以倒推，从后向前，然后取dp[0]的结果
var minDays = function(n) {
    const memo = new Map([[0, 0], [1, 1]]);

    function dfs(n) {
        if (memo.has(n)) {
            return memo.get(n);
        }
        memo.set(n, Math.min(n % 2 + 1 + dfs(Math.floor(n / 2)), n % 3 + 1 + dfs(Math.floor(n / 3))));
        return memo.get(n);
    }
    return dfs(n);
};



var n = 10
// n = 820592
// n = 6
// n = 1
// n = 56
// n = 61455274
var ans = minDays(n)
console.log(ans)