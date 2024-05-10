// 爬梯子，每阶梯子都有对应的花费，每次可以1步或者2步，可以从0或1开始，求最小的花费

// 思路：动态规划
/**
 * @param {number[]} cost
 * @return {number}
 */

// 这道题有两种步一样的递归/递推思路

// 递归
var minCostClimbingStairs = function (cost) {
    const n = cost.length
    let min = Infinity
    dfs(0, 0)
    dfs(1, 0)
    return min
    function dfs(i, cnt) {
        if (i >= n) {
            min = Math.min(min, cnt)
            return
        }
        cnt += cost[i]
        dfs(i + 1, cnt)
        dfs(i + 2, cnt)
    }
}

// 上面这种dfs不是纯函数，无法进行cache，可以进行改造
var minCostClimbingStairs = function (cost) {
    const n = cost.length
    const cache = {}

    return Math.min(dfs(0), dfs(1))

    function dfs(i) {
        if (cache[i]) return cache[i]
        if (i >= n) {
            return 0
        }
        const val = cost[i] + Math.min(dfs(i + 1), dfs(i + 2))
        cache[i] = val
        return val
    }
}

// 递归完了就可以尝试递推
// 可以定义dp[i]从n到i时所需要的最小花费，dp[n]=0，则dp[i] = cost[i] + Math.min(dp[i+1],dp[i+2])，最终结果为min(dp[0], dp[1])
// 这个从递归引申过来的递推就有点奇怪，完全是逆向的判断
var minCostClimbingStairs = function (cost) {
    const n = cost.length
    const dp = new Array(n + 1).fill(0)
    dp[n] = 0
    for (let i = n; i >= 0; --i) {
        dp[i] = (i === n ? 0 : cost[i]) + Math.min(i + 1 > n ? 0 : dp[i + 1], i + 2 > n ? 0 : dp[i + 2])
    }
    return Math.min(dp[0], dp[1])
}

// 定义dp[i]为经过i时的最小花费，包含了cost[i]，则结果就是min(dp[i-1], dp[i-2])
var minCostClimbingStairs = function (cost) {
    const n = cost.length
    const dp = [cost[0], cost[1]]
    for (var i = 2; i < n; ++i) {
        dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2])
    }
    return Math.min(dp[n - 1], dp[n - 2])
}

// 空间优化
var minCostClimbingStairs = function (cost) {
    var f1 = 0,
        f2 = 0;
    for (var i = 0; i < cost.length; ++i) {
        var f0 = cost[i] + Math.min(f1, f2);
        f2 = f1;
        f1 = f0;
    }
    return Math.min(f1, f2)
};

/*下面是第二种递归/递推思路 */

var minCostClimbingStairs = function (cost) {
    const n = cost.length
    const cache = {}
    return dfs(n)
    function dfs(i) {
        if (cache[i]) return cache[i]
        if (i === 0) return 0
        if (i === 1) return 0
        return cache[i] = Math.min(dfs(i - 1) + cost[i - 1], dfs(i - 2) + cost[i - 2])
    }
}

// 使用dp[i]表示到从0或1到达第i步的最小花费，dp[0]=0,dp[1]=0，最终结果为dp[n]
// dp[i] = Math.min(dp[i-2] + cost[i-2], dp[i-1] + cost[i-1])
var minCostClimbingStairs = function (cost) {
    const dp = [0, 0]// 初始可以直接选择，所以花费为0
    const n = cost.length
    for (let i = 2; i <= n; ++i) {
        const v1 = dp[i - 1] + cost[i - 1] // 从前面第1步跳过来
        const v2 = dp[i - 2] + cost[i - 2] // 第前面第2步跳过来
        dp[i] = Math.min(v1, v2)
    }
    return dp[n]
}

// dp空间优化
var minCostClimbingStairs = function (cost) {
    let a = 0
    let b = 0
    const n = cost.length
    for (let i = 2; i <= n; ++i) {
        const c = Math.min(b + cost[i - 1], a + cost[i - 2])
        a = b
        b = c
    }
    return b
}



var cost = [10, 15, 20]
// cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
var ans = minCostClimbingStairs(cost)
console.log(ans)
