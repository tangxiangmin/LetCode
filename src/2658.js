/**
 * @param {number[][]} grid
 * @return {number}
 */
// 题意是要找到和最大的水域区域
var findMaxFish = function (grid) {
    const m = grid.length
    const n = grid[0].length
    const visited = new Array(m).fill(0).map(() => new Array(n).fill(0))
    let ans = 0
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            ans = Math.max(ans, dfs(i, j))
        }
    }
    return ans

    function dfs(i, j) {
        if (i < 0 || i === m || j < 0 || j == n) return 0
        if (grid[i][j] === 0) return 0
        if (visited[i][j]) return 0
        visited[i][j] = 1
        return grid[i][j] + dfs(i + 1, j) + dfs(i - 1, j) + dfs(i, j + 1) + dfs(i, j - 1)
    }
};