/**
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @param {number} color
 * @return {number[][]}
 */
// 思路，先把边界找出来，再上色
var colorBorder = function (grid, row, col, color) {
    const m = grid.length
    const n = grid[0].length
    if (grid[row][col] === color) return grid

    const visited = new Array(m).fill(0).map(() => new Array().fill(0))

    const border = []
    const origin = grid[row][col]

    dfs(row, col)

    for (const [i, j] of border) {
        grid[i][j] = color
    }
    return grid

    function dfs(i, j) {
        if (i < 0 || i === m || j < 0 || j === n) return
        if (grid[i][j] !== origin) return
        if (visited[i][j]) return

        visited[i][j] = 1

        if (check(i, j)) {
            border.push([i, j])
        }

        dfs(i + 1, j)
        dfs(i - 1, j)
        dfs(i, j + 1)
        dfs(i, j - 1)
    }
    function check(i, j) {
        if (i - 1 < 0 || i + 1 >= m || j - 1 < 0 || j + 1 >= n) return true
        const v = grid[i][j]
        return grid[i + 1][j] !== v || grid[i - 1][j] !== v || grid[i][j + 1] !== v || grid[i][j - 1] !== v
    }
};

var grid = [
    [1, 2, 2],
    [2, 3, 2]], row = 0, col = 1, color = 3
grid = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]], row = 1, col = 1, color = 2
grid = [
    [1, 2, 1],
    [1, 2, 2],
    [2, 2, 1]], row = 1, col = 1, color = 2
grid = [[2, 1, 3, 2, 1, 1, 2], [1, 2, 3, 1, 2, 1, 2], [1, 2, 1, 2, 2, 2, 2], [2, 1, 2, 2, 2, 2, 2], [2, 3, 3, 3, 2, 1, 2]], row = 4, col = 4, color = 3
var ans = colorBorder(grid, row, col, color)
console.table(ans)