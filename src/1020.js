/**
 * @param {number[][]} grid
 * @return {number}
 */
// 思路，反向思考，从四周出发遍历，记录可以离开的块数
var numEnclaves = function (grid) {
    const m = grid.length
    const n = grid[0].length

    const visited = new Array(m).fill(0).map(() => new Array(n).fill(0))

    for (let i = 0; i < m; ++i) {
        dfs(i, 0)
        dfs(i, n - 1)
    }
    for (let i = 0; i < n; ++i) {
        dfs(0, i)
        dfs(m - 1, i)
    }

    let ans = 0
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (grid[i][j] === 1 && !visited[i][j]) {
                ans++
            }
        }
    }
    return ans

    function dfs(i, j) {
        if (i < 0 || i === m || j < 0 || j == n) return
        if (grid[i][j] === 0) return
        if (visited[i][j]) return
        visited[i][j] = 1
        dfs(i + 1, j)
        dfs(i - 1, j)
        dfs(i, j + 1)
        dfs(i, j - 1)
    }
};
// 思路2，并查集，计算每块地的联通分量，飞地的联通分量与四周的不相等

var grid = [[0, 0, 0, 0], [1, 0, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]]
// grid = [[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 0, 0]]
var ans = numEnclaves(grid)
console.log(ans)