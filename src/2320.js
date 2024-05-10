/**
 * @param {number} n
 * @return {number}
 */
// 每条边的不影响，因此先处理单边的情况，然后相乘，由于不能相连，因此跟打家劫舍题目是一样的逻辑
var countHousePlacements = function (n) {
    const cache = {}
    const mod = BigInt(10 ** 9 + 7)
    const val = dfs(n)

    return Number(val * val % mod)

    function dfs(i) {
        if (cache[i] !== undefined) return cache[i]
        if (i === 0) return 1n
        if (i == 1) return 2n // 建或不建2种情况
        return cache[i] = dfs(i - 1) + dfs(i - 2)
    }
};

// dp递推
// dp[i] = dp[i-1] + dp[i-2]
var countHousePlacements = function (n) {
    let a = 1n
    let b = 2n
    const mod = 10 ** 9 + 7

    for (let i = 2; i <= n; ++i) {
        const c = (a + b)
        a = b
        b = c
    }

    return Number(BigInt(b * b) % BigInt(mod))
}

// js这个大数溢出蛋疼，最好是在累加过程中整除
var countHousePlacements = function (n) {
    let a = 1n
    let b = 2n
    const mod = BigInt(10 ** 9 + 7)

    for (let i = 2; i <= n; ++i) {
        const c = (a + b) % mod
        a = b
        b = c
    }

    return Number(b * b % mod)
}

var n = 2
n = 1000
var ans = countHousePlacements(n)
console.log(ans)