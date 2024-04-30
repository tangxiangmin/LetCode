/**
 * @param {number[][]} grid
 * @return {number}
 */
// dfs
var closedIsland = function (grid) {
    const m = grid.length
    const n = grid[0].length

    let ans = 0
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (grid[i][j] === 0 && dfs(i, j)) {
                ans++
            }
        }
    }
    return ans

    function dfs(i, j) {
        if (i < 0 || i >= m || j < 0 || j >= n) return false
        if (grid[i][j] !== 0) return true
        grid[i][j] = -1
        let v1 = dfs(i + 1, j)
        let v2 = dfs(i - 1, j)
        let v3 = dfs(i, j + 1)
        let v4 = dfs(i, j - 1)
        return v1 && v2 && v3 && v4
    }
};

var grid = [[1, 1, 1, 1, 1, 1, 1, 0], [1, 0, 0, 0, 0, 1, 1, 0], [1, 0, 1, 0, 1, 1, 1, 0], [1, 0, 0, 0, 0, 1, 0, 1], [1, 1, 1, 1, 1, 1, 1, 0]]
grid =
    [[0, 0, 1, 1, 0, 1, 0, 0, 1, 0],
    [1, 1, 0, 1, 1, 0, 1, 1, 1, 0],
    [1, 0, 1, 1, 1, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 1, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0]]
var ans = closedIsland(grid)
console.log(ans)