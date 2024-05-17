/**
 * @param {number[][]} grid
 * @return {number}
 */
// 记忆化搜索，在每一步保存最小值和最大值，最后汇总再处理数据
var maxProductPath = function (grid) {

    const m = grid.length
    const n = grid[0].length
    const cache = new Array(m).fill(0).map(() => new Array(n))
    const mod = 10 ** 9 + 7
    const ans = Math.max(...dfs(0, 0))

    return ans < 0 ? -1 : ans % mod

    function dfs(i, j) {
        if (cache[i][j] !== undefined) return cache[i][j]
        const val = grid[i][j]

        if (i === m - 1 && j === n - 1) return [val, val]

        const vals = []
        if (i + 1 < m) {
            vals.push(...dfs(i + 1, j))
        }
        if (j + 1 < n) {
            vals.push(...dfs(i, j + 1))
        }

        const max = Math.max(...vals)
        const min = Math.min(...vals)

        return cache[i][j] = [min, max].map((v) => v * val)
    }
};

var grid = [[-1, -2, -3], [-2, -3, -3], [-3, -3, -2]]
grid = [[1, -2, 1], [1, -2, 1], [3, -4, 1]]
grid = [[1, 3], [0, -4]]
grid = [
    [-1, -4, 2],
    [4, 3, -1],
    [2, -4, 4],
    [1, -1, -4]]
var ans = maxProductPath(grid)
console.log(ans)