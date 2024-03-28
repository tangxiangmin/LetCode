/**
 * @param {number[][]} grid
 * @return {number}
 */
// dfs，然后看到达终点的最小数
var minimumVisitedCells = function (grid) {
    const m = grid.length
    const n = grid[0].length
    let ans = Infinity
    function dfs(i, j, sum) {
        if (i >= m || j >= n) return
        if (i === m - 1 && j === n - 1) {
            ans = Math.min(sum, ans)
            return
        }
        for (let k = j + 1; k <= grid[i][j] + j; ++k) {
            dfs(i, k, sum + 1)
        }
        for (let k = i + 1; k <= grid[i][j] + i; ++k) {
            dfs(k, j, sum + 1)
        }
    }
    dfs(0, 0, 1) // 统计的是格子数，因此sum初始值为1
    return ans === Infinity ? -1 : ans
};
var grid = [[3, 4, 2, 1], [4, 2, 3, 1], [2, 1, 0, 0], [2, 4, 0, 0]]
grid = [[3, 4, 2, 1], [4, 2, 1, 1], [2, 1, 1, 0], [3, 4, 1, 0]]
var ans = minimumVisitedCells(grid)
console.log(ans)