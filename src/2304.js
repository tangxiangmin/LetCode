/**
 * @param {number[][]} grid
 * @param {number[][]} moveCost
 * @return {number}
 */

// 记忆搜索
var minPathCost = function (grid, moveCost) {
    const m = grid.length
    const n = grid[0].length

    let min = Infinity
    const cache = new Array(m).fill(0).map(() => new Array(n).fill(0))

    for (let k = 0; k < n; ++k) {
        min = Math.min(min, dfs(0, k))
    }

    return min
    function dfs(i, j) {
        if (i === m - 1) return grid[i][j]
        const val = grid[i][j]
        if (cache[i][j]) return cache[i][j]

        let min = Infinity
        for (let k = 0; k < n; ++k) {
            min = Math.min(min, dfs(i + 1, k) + moveCost[val][k] + val)
        }

        return cache[i][j] = min
    }
}
// dp，将上面的代码翻译成dp，由于初始状态是最后一行，因此需要倒序来处理
var minPathCost = function (grid, moveCost) {
    const m = grid.length
    const n = grid[0].length

    const dp = new Array(m).fill(0).map(() => new Array(n).fill(Infinity))

    for (let j = 0; j < n; ++j) {
        dp[m - 1][j] = grid[m - 1][j]
    }

    for (let i = m - 2; i >= 0; --i) {
        for (let j = 0; j < n; ++j) {
            const val = grid[i][j]
            for (let k = 0; k < n; ++k) {
                dp[i][j] = Math.min(dp[i][j], moveCost[val][k] + dp[i + 1][k])
            }
            dp[i][j] += val
        }
    }
    return Math.min(...dp[0])
};

var grid = [[5, 3], [4, 0], [2, 1]], moveCost = [[9, 8], [1, 5], [10, 12], [18, 6], [2, 4], [14, 3]]
grid = [[5, 1, 2], [4, 0, 3]], moveCost = [[12, 10, 15], [20, 23, 8], [21, 7, 1], [8, 1, 13], [9, 10, 25], [5, 3, 2]]
var ans = minPathCost(grid, moveCost)
console.log(ans)