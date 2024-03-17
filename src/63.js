/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
// 思路：动态规划，每次只能向下或者向右移动一步,遇见障碍物则移除该条路径
// dp[i][j] = 
// (gird[i-1][j] === 0 ? dp[i-1][j] : 0) + 
// (grid[i][j-1] === 0 ? dp[i][j-1] : 0)
var uniquePathsWithObstacles = function (obstacleGrid) {
    var r = obstacleGrid.length
    if (r === 0) {
        return 0
    }
    var c = obstacleGrid[0].length
    if (obstacleGrid[0][0] === 1) {
        return 0
    }
    obstacleGrid[0][0] = 1
    for (var i = 0; i < r; ++i) {
        for (var j = 0; j < c; ++j) {
            if (obstacleGrid[i][j] === 1) {
                // 有障碍的坐标则重置为0
                if (i !== 0 || j !== 0) {
                    obstacleGrid[i][j] = 0
                }
            } else {
                var top = 0
                if (i >= 1) {
                    top = obstacleGrid[i - 1][j]
                }
                var left = 0
                if (j >= 1) {
                    left = obstacleGrid[i][j - 1]
                }
                obstacleGrid[i][j] = left + top
            }
        }
    }
    return obstacleGrid[r - 1][c - 1]
};


// 使用dp数组dp[i][j]记录到达grid[i][j]位置的路径，则grid[i][j]等于grid[i-1][j]上方+grid[i][j-1]左边两个之和
var uniquePathsWithObstacles = function (obstacleGrid) {
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length

    const dp = new Array(m).fill(0).map(() => new Array(n))
    dp[0][0] = obstacleGrid[0][0] === 0 ? 1 : 0
    for (let i = 1; i < m; ++i) {
        dp[i][0] = obstacleGrid[i][0] === 0 ? dp[i - 1][0] : 0
    }
    for (let i = 1; i < n; ++i) {
        dp[0][i] = obstacleGrid[0][i] === 0 ? dp[0][i - 1] : 0
    }
    for (let i = 1; i < m; ++i) {
        for (let j = 1; j < n; ++j) {
            const cell = obstacleGrid[i][j]
            if (cell === 1) {
                dp[i][j] = 0
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
            }
        }
    }
    return dp[m - 1][n - 1]
}

var grid = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
]

grid = [[0, 1], [0, 0]]

// dp表应该为
// [
//     [1, 1, 1],
//     [1, 0, 1],
//     [1, 1, 1+1],
// ]

// grid = [[0, 1]]
var res = uniquePathsWithObstacles(grid)
console.log(res)