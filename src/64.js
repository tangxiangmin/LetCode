/**
 * @param {number[][]} grid
 * @return {number}
 * 每次只能向下或者向右移动一步
 * 思路：动态规划，假设gird[m][n]，其中m或n等于1，则只有一条路径
 */
var minPathSum = function (grid) {
    var r = grid.length
    if (r == 0) {
        return 0
    }
    var c = grid[0].length
    for (var i = 0; i < r; ++i) {
        for (var j = 0; j < c; ++j) {
            var min
            if (i == 0 && j == 0) {
                min = 0
            } else if (j == 0 && i >= 1) {
                min = grid[i - 1][j]
            } else if (i == 0 && j >= 1) {
                min = grid[i][j - 1]
            } else {
                min = Math.min(grid[i - 1][j], grid[i][j - 1])
            }
            grid[i][j] += min
        }
    }
    return grid[r - 1][c - 1]
};

var minPathSum = function (grid) {
    const m = grid.length
    const n = grid[0].length
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            let min
            if (i == 0 && j == 0) {
                min = 0
            } else if (j == 0 && i >= 1) {
                min = dp[i - 1][j]
            } else if (i == 0 && j >= 1) {
                min = dp[i][j - 1]
            } else {
                min = Math.min(dp[i - 1][j], dp[i][j - 1])
            }
            dp[i][j] = grid[i][j] + min
        }
    }
    return dp[m - 1][n - 1]
}

var grid = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
]
// 所得dp表应该为
// [
//     [1, 4, 5],
//     [2, 7, 6],
//     [6, 8, 7]
// ]

var res = minPathSum(grid)

console.log(res)

// 通往右下角有两个选择：grid[m-1][n]和grid[m][n-1]中的较小值，再加上当前坐标值
// [1, 2] // [1, 1+2]3
// [
//     [1],
//     [2] // [[1], [1, 1+2]]
// ]  

// 2*2
// [
//     [1, 2], // [1, 1+2]
//     [3, 4] // [1+3, 4 + min(1+2, 1+3)]
// ]
// 2*3
// [
//     [1, 2, 5], // [1, 1+2 = 3, 1+2+5 = 8]
//     [3, 4, 6] // [1+3 = 4, 4 + min(3, 4) = 7, 6 + min(7, 8) = 13]
// ]