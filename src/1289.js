/**
 * @param {number[][]} grid
 * @return {number}
 */
// 记忆化搜索
var minFallingPathSum = function (grid) {
    const m = grid.length
    const n = grid[0].length

    let min = Infinity
    const cache = new Array(m).fill(0).map(() => new Array(n).fill(0))
    for (let j = 0; j < n; ++j) {
        min = Math.min(dfs(0, j), min)
    }
    return min

    function dfs(i, j) {
        if (i === m || j < 0 || j === n) return 0
        if (cache[i][j]) return cache[i][j]

        let min = Infinity
        for (let k = 0; k < n; ++k) {
            if (k === j) continue
            min = Math.min(dfs(i + 1, k), min)
        }

        return cache[i][j] = min === Infinity ? grid[i][j] : min + grid[i][j]
    }
};
// dp
var minFallingPathSum = function (grid) {
    const m = grid.length
    const n = grid[0].length
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(Infinity))
    dp[m - 1] = grid[m - 1]

    for (let i = m - 2; i >= 0; --i) {
        for (let j = 0; j < n; ++j) {
            for (let k = 0; k < n; ++k) {
                if (k === j) continue
                dp[i][j] = Math.min(dp[i + 1][k], dp[i][j])
            }
            dp[i][j] += grid[i][j]
        }
    }
    return Math.min(...dp[0])
}

// 上面的状态还可以进一步优化，对于每一行而言，只会用到前两个最小的值，如果j!==k就用最小值；否则用第二小的值
var minFallingPathSum = function (grid) {
    const m = grid.length
    const n = grid[0].length
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(Infinity))
    dp[m - 1] = grid[m - 1]

    for (let i = m - 2; i >= 0; --i) {
        for (let j = 0; j < n; ++j) {
            let [a, b] = smallest(dp[i + 1], 2)
            dp[i][j] = (j == a ? dp[i + 1][b] : dp[i + 1][a]) + grid[i][j]
        }
    }
    return Math.min(...dp[0])

    // 数组中存在相同元素，因此保存的是前两个最小元素的索引值，这个算法这里需要优化一下才行，否则还不如上面的三重循环
    function smallest(arr, n) {
        const list = arr.map((_, index) => index)
        list.sort((a, b) => arr[a] - arr[b])
        return list.slice(0, n)
    }
}

var grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// grid = [[7]]
// grid = [[2, 2, 1, 2, 2], [2, 2, 1, 2, 2], [2, 2, 1, 2, 2], [2, 2, 1, 2, 2], [2, 2, 1, 2, 2]]
var ans = minFallingPathSum(grid)
console.log(ans)