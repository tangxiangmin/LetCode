/**
 * @param {number[][]} grid
 * @return {number}
 */
// dfs，数据量大会超时
var maxMoves = function (grid) {
    const m = grid.length
    const n = grid[0].length
    let ans = 0
    function move(i, j, step) {
        if (j === n - 1) {
            if (ans < step) {
                ans = step
            }
            return
        }
        const cell = grid[i][j]

        let flag = false
        if (i > 0 && grid[i - 1][j + 1] > cell) {
            move(i - 1, j + 1, step + 1)
            flag = true
        }
        if (grid[i][j + 1] > cell) {
            move(i, j + 1, step + 1)
            flag = true
        }
        if (i < m - 1 && grid[i + 1][j + 1] > cell) {
            move(i + 1, j + 1, step + 1)
            flag = true
        }
        if (!flag) {
            if (ans < step) {
                ans = step
            }
        }
    }
    for (let i = 0; i < m; ++i) {
        move(i, 0, 0)
    }
    return ans
};
// 原因是每一列的单元格都存在重复计算，因此可以改成dp数组优化
// 从最后一列向前，记录到达grip[i][j]位置的步数，然后前推
var maxMoves = function (grid) {
    const m = grid.length
    const n = grid[0].length
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
    for (let j = n - 2; j >= 0; --j) {
        for (let i = 0; i < m; ++i) {
            const cell = grid[i][j]
            let max = 0
            if (i > 0 && grid[i - 1][j + 1] > cell) {
                max = Math.max(dp[i - 1][j + 1] + 1, max)
            }
            if (grid[i][j + 1] > cell) {
                max = Math.max(dp[i][j + 1] + 1, max)
            }
            if (i + 1 < m && grid[i + 1][j + 1] > cell) {
                max = Math.max(dp[i + 1][j + 1] + 1, max)
            }
            if (max > 0) {
                dp[i][j] = max
            }
        }
    }
    let max = 0
    for (let i = 0; i < m; ++i) {
        if (dp[i][0] > max) {
            max = dp[i][0]
        }
    }
    return max

}

var grid = [[2, 4, 3, 5], [5, 4, 9, 3], [3, 4, 2, 11], [10, 9, 13, 15]]
// grid = [[3, 2, 4], [2, 1, 9], [1, 1, 7]]
grid = [
    [131, 1, 95, 208, 38, 257, 123, 204, 101],
    [185, 165, 292, 109, 266, 259, 97, 234, 60],
    [55, 281, 38, 61, 204, 243, 32, 54, 164],
    [106, 230, 202, 4, 65, 243, 89, 139, 211],
    [192, 246, 11, 294, 119, 43, 250, 161, 110],
    [71, 279, 288, 173, 64, 48, 216, 26, 276],
    [23, 206, 152, 106, 288, 286, 270, 131, 12],
    [115, 64, 251, 108, 194, 295, 131, 249, 121]
]
var ans = maxMoves(grid)
console.log(ans)