
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
    let col = grid[0].length,
        row = grid.length;

    function findVerticalSkyline(grid) {
        let res = [];

        for (let i = 0; i < col; ++i) {
            let line = [];
            for (let j = 0; j < row; ++j) {
                line.push(grid[j][i]);
            }
            let max = Math.max.apply(null, line);
            res.push(max);
        }
        return res;
    }
    function findHorizontalSkyline(){
        let res = [];
        for (let i = 0; i < row; ++i) {
            let line = [];
            for (let j = 0; j < col; ++j) {
                line.push(grid[i][j]);
            }
            let max = Math.max.apply(null, line);
            res.push(max);
        }
        return res;
    }

    let veritacal = findVerticalSkyline(grid);
    let horizontal = findHorizontalSkyline(grid);
    
    let sum = 0
    for (let i = 0; i < row; ++i) {
        for (let j = 0; j < col; ++j) {
            let origin = grid[i][j]
            let max = Math.min(veritacal[j], horizontal[i])
            sum += (max - origin)
            grid[i][j] = max
        }
    }
    return sum
};

let grid = [[3, 0, 8, 4],
[2, 4, 5, 7],
[9, 2, 6, 3],
[0, 3, 1, 0]]
maxIncreaseKeepingSkyline(grid)