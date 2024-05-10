/**
 * Created by admin on 2017/4/30.
 */
// 爬楼梯，一次1步或2步，给定n阶楼梯要爬多少次

// 思路
// n = 1, ways = 1
// n = 2, ways = 2 (11, 2)
// n = 3, ways = 3 (111,12,21)
// n = 4, ways = 5 (1111,112,121,211,22)
// 可见类似于斐波拉契数列
// 问题：使用递归会超时

/**
 * @param {number} n
 * @return {number}
 */

// 最小化问题，
// n==0时，答案为1
// n==1，答案为1
// n==2，答案为 a[0] + a[1]

// 递归
var climbStairs = function (n) {
    const cache = {}

    return dfs(n)

    function dfs(i) {
        if (cache[i]) return cache[i]
        if (i === 0) return 1
        if (i === 1) return 1
        const val = dfs(i - 1) + dfs(i - 2)
        cache[i] = val
        return val
    }
};
// 递推
var climbStairs = function (n) {
    const dp = [1, 1]
    for (let i = 2; i <= n; ++i) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n]
}

// 只需要前两个状态，因此可以使用两个变量代替dp数组，节省空间复杂度
var climbStairs = function (n) {
    let a = 1
    let b = 1
    let c
    for (let i = 2; i <= n; ++i) {
        c = a + b
        a = b
        b = c
    }
    return c
}

var n = 3
var ans = climbStairs(n)
console.log(ans)