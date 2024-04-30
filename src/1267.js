/**
 * @param {number[][]} grid
 * @return {number}
 */
// 数据量不大，BF
var countServers = function (grid) {
    const m = grid.length
    const n = grid[0].length

    let ans = 0
    for (let i = 0; i < m; ++i) {
        let cnt = 0
        for (let j = 0; j < n; ++j) {
            if (grid[i][j] >= 1) {
                cnt++
            }
        }
        if (cnt > 1) {
            for (let j = 0; j < n; ++j) {
                if (grid[i][j] == 1) {
                    grid[i][j] = 2
                    ans++
                }
            }
        }
    }
    for (let i = 0; i < n; ++i) {
        let cnt = 0
        for (let j = 0; j < m; ++j) {
            if (grid[j][i] >= 1) {
                cnt++
            }
        }
        if (cnt > 1) {
            for (let j = 0; j < m; ++j) {
                if (grid[j][i] == 1) {
                    grid[j][i] = 2
                    ans++
                }
            }
        }
    }
    return ans
};
var grid = [[1, 1, 0, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 0, 1]]
grid = [[1, 0], [1, 1]]
grid = [[1, 0], [0, 1]]

var ans = countServers(grid)
console.log(ans)