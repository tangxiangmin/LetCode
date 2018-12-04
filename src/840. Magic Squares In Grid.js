// 求矩阵中有多少个magic方块（3X3，摆放1-9横列对角线之和相等）

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {
    
    function isMagicSquare(...arr) {
        var hash = {};
        var vals = [];
        for (let i = 0; i < arr.length; ++i) {
            var item = arr[i];
            if (!hash[item]) {
                hash[item] = 0;
            }
            hash[item]++;
            vals.push(item);
        }
        for (let i = 1; i <= 9; ++i) {
            if (hash[i] != 1) {
                return false;
            }
        }

        return vals[0] + vals[1] + vals[2] == 15 && vals[3] + vals[4] + vals[5] == 15 && vals[6] + vals[7] + vals[8] == 15 && vals[0] + vals[3] + vals[6] == 15 && vals[1] + vals[4] + vals[7] == 15 && vals[2] + vals[5] + vals[8] == 15 && vals[0] + vals[4] + vals[8] == 15 && vals[2] + vals[4] + vals[6] == 15;
    }

    let R = grid.length, C = grid[0].length;
    let ans = 0;
    for (let r = 0; r < R - 2; ++r)
    for (let c = 0; c < C - 2; ++c) {
        if (grid[r + 1][c + 1] != 5) continue;
        if (isMagicSquare(grid[r][c], grid[r][c + 1], grid[r][c + 2], grid[r + 1][c], grid[r + 1][c + 1], grid[r + 1][c + 2], grid[r + 2][c], grid[r + 2][c + 1], grid[r + 2][c + 2])) ans++;
    }

    return ans;
};

numMagicSquaresInside([[4, 3, 8, 4], [9, 5, 1, 9], [2, 7, 6, 2]])