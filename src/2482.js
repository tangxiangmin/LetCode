/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function (grid) {
    const m = grid.length
    const n = grid[0].length

    const cols = []
    for (let i = 0; i < n; ++i) {
        let ans = 0
        for (let j = 0; j < m; ++j) {
            if (grid[j][i] === 1) {
                ans++
            }
        }
        cols[i] = ans
    }

    const diff = []
    for (let i = 0; i < m; ++i) {
        let ans = 0
        for (let j = 0; j < n; ++j) {
            if (grid[i][j] === 1) {
                ans++
            }
        }

        const row = []
        for (let j = 0; j < n; ++j) {
            row[j] = ans + cols[j] - (n - ans) - (m - cols[j])
        }

        diff[i] = row
    }
    return diff

};