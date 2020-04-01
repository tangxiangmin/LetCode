/**
 * @param {number[][]} grid
 * @return {number}
 */
// 思路：由于行、列都是按非递增序列进行，所以矩阵右下方应为负数
var countNegatives = function(grid) {
    var row = grid.length;
    if (!row) return 0;
    var col = grid[0].length;

    var ans = 0;
    var lastCol = 0;
    for (var i = row - 1; i >= 0; --i) {
        for (var j = lastCol; j < col; ++j) {
            if (grid[i][j] >= 0) continue;
            lastCol = j;
            ans += col - j;
            break;
        }
    }
    return ans
};

var grid = [
    [4, 3, 2, -1],
    [3, 2, 1, -1],
    [1, 1, -1, -2],
    [-1, -1, -2, -3]
];

var res = countNegatives(grid);
console.log(res);
