/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
    const n = grid.length
    let ans = 0

    for (let i = 0; i < n; ++i) {
        const col = []
        for (let j = 0; j < n; ++j) {
            col[j] = grid[j][i]
        }
        for (let j = 0; j < n; ++j) {
            const row = grid[j]
            if (row.every((val, index) => col[index] === val)) {
                ans++
            }
        }
    }
    return ans
};

var grid = [[3, 2, 1], [1, 7, 6], [2, 7, 7]]
var ans = equalPairs(grid)
console.log(ans)