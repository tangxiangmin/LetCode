/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumArea = function (grid) {
    const m = grid.length
    const n = grid[0].length
    let t = m, b = -1, l = n, r = -1;
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            const val = grid[i][j]
            if (val === 1) {
                t = Math.min(t, i)
                b = Math.max(b, i)
                l = Math.min(l, j)
                r = Math.max(r, j)
            }
        }
    }
    return (b - t + 1) * (r - l + 1)
};

var grid = [[0, 1, 0], [1, 0, 1]]
grid = [[0,0],[1,0]]
var ans = minimumArea(grid)
console.log(ans)