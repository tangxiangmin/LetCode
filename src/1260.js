var shiftGrid = function(grid, k) {
    const m = grid.length, n = grid[0].length;
    const ret = [];
    for (let i = 0; i < m; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            row.push(0);
        }
        ret.push(row);
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const index1 = (i * n + j + k) % (m * n);
            ret[Math.floor(index1 / n)].splice(index1 % n, 1, grid[i][j]);
        }
    }
    return ret;
};
