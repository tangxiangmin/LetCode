/**
 * @param {number[][]} grid
 * @return {number}
 */
var numberOfRightTriangles = function (grid) {
    const m = grid.length
    const n = grid[0].length
    const rows = []
    const cols = []

    for (let j = 0; j < n; ++j) {
        let cnt = 0
        for (let i = 0; i < m; ++i) {
            if (grid[i][j] === 1) {
                cnt++
            }
        }
        cols[j] = cnt
    }

    let ans = 0
    for (let i = 0; i < m; ++i) {
        let cnt = 0
        for (let j = 0; j < n; ++j) {
            if (grid[i][j] === 1) {
                cnt++
            }
        }
        rows[i] = cnt

        for (let j = 0; j < n; ++j) {
            if (grid[i][j] === 1) {
                if (cols[j] > 0) {
                    ans += (rows[i] - 1) * (cols[j] - 1)

                }
            }
        }
    }
    return ans
};
var grid = [[0, 1, 0], [0, 1, 1], [0, 1, 0]]
grid = [[1, 0, 0, 0], [0, 1, 0, 1], [1, 0, 0, 0]]
grid = [[1, 0, 1], [1, 0, 0], [1, 0, 0]]
var ans = numberOfRightTriangles(grid)
console.log(ans)