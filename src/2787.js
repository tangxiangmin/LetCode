/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
// 记忆化搜索
var numberOfWays = function (n, x) {
    const mod = 10 ** 9 + 7
    const cache = new Array(n + 1).fill(0).map(() => new Array())
    return dfs(1, 0) % mod
    function dfs(i, target) {
        if (target === n) return 1
        if (target > n) return 0
        if (i > n) return 0
        if (cache[i][target] !== undefined) return cache[i][target]

        const val = Math.pow(i, x)
        return cache[i][target] = (dfs(i + 1, target + val) + dfs(i + 1, target)) % mod
    }
};

var n = 10, x = 2
n = 4, x = 1
n = 160, x = 3
n = 72, x = 1
var ans = numberOfWays(n, x)
console.log(ans)