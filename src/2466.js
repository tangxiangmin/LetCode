/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
// 这道题数据量很大，JS递归会爆栈
var countGoodStrings = function (low, high, zero, one) {
    let ans = 0n
    const mod = BigInt(10 ** 9 + 7)
    const cache = {}
    for (let i = low; i <= high; ++i) {
        ans += dfs(i)
    }
    return Number(ans % mod)

    function dfs(n) {
        if (cache[n] !== undefined) return cache[n]
        if (n === 0) return 1n
        if (n < 0) return 0n

        return cache[n] = dfs(n - zero) + dfs(n - one)
    }
};
// 递推dp
// dp[i]表示长度为i的解法，dp[i] = dp[i-zero] + dp[i-one]
// dp[0] = 1
var countGoodStrings = function (low, high, zero, one) {
    const dp = new Array(high + 1).fill(0)
    dp[0] = 1
    let ans = 0
    const mod = 10 ** 9 + 7
    for (let i = 0; i <= high; ++i) {
        if (i >= zero) {
            dp[i] = (dp[i] + dp[i - zero]) % mod
        }
        if (i >= one) {
            dp[i] = (dp[i] + dp[i - one]) % mod
        }
        if (i >= low) {
            ans = (ans + dp[i]) % mod
        }
    }
    return Number(ans)
}
var low = 3, high = 3, zero = 1, one = 1
low = 2, high = 3, zero = 1, one = 2
low = 500, high = 500, zero = 5, one = 2 // 873327137
// low = 1000, high = 1000, zero = 6, one = 9
low = 1, high = 100000, zero = 1, one = 1
var ans = countGoodStrings(low, high, zero, one)
console.log(ans)