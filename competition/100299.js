/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var satisfiesConditions = function (grid) {
    const m = grid.length
    const n = grid[0].length


    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (!check(i, j)) return false
        }
    }
    return true

    function check(i, j) {
        const cur = grid[i][j]
        return (i === m - 1 || (grid[i + 1][j] === cur)) && (j === n - 1 || (grid[i][j + 1] !== cur))
    }
};
var grid = [[1, 0, 2], [1, 0, 2]]
grid = [[1, 1, 1], [0, 0, 0]]
grid = [[1], [2], [3]]
var ans = satisfiesConditions(grid)
console.log(ans)