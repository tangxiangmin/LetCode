/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function(grid) {
    var n = grid.length;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            // 判断是否是对角线
            if (i == j || (n - 1 - i) == j) {
                if (grid[i][j] == 0) {
                    return false;
                }
            } else {
                if (grid[i][j] != 0) {
                    return false;
                }
            }
        }
    }
    return true;
};