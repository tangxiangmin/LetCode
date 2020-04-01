/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
// 思路1:BF
var oddCells = function(n, m, indices) {
    let grid = [];

    for (let i = 0; i < n; ++i) {
        grid.push(new Array(m).fill(0));
    }
    indices.forEach(([r, c]) => {
        for (let i = 0; i < n; ++i) {
            for (let j = 0; j < m; ++j) {
                if (i == r) {
                    grid[i][j]++;
                }
                if (j == c) {
                    grid[i][j]++;
                }
            }
        }
    });
    let ans = 0;
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < m; ++j) {
            if (grid[i][j] % 2) ans++;
        }
    }
    return ans;
};
