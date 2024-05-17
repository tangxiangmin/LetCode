/**
 * @param {number[][]} grid
 * @return {number}
 */
// 没有固定的起点和终点，参考的题解
var maxScore = function (grid) {
    const m = grid.length
    const n = grid[0].length
    var ans = -Infinity;
    const f = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(Infinity));

    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            var mn = Math.min(f[i + 1][j], f[i][j + 1]);
            ans = Math.max(ans, grid[i][j] - mn);
            f[i + 1][j + 1] = Math.min(mn, grid[i][j]);
        }
    }
    return ans;
};
var grid = [[9, 5, 7, 3], [8, 9, 6, 1], [6, 7, 14, 3], [2, 5, 3, 1]]
var ans = maxScore(grid)
console.log(ans)