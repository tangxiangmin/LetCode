/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function (grid) {
    var row = grid.length;
    var col = grid[0].length;
    var ans = [];
    for (var i = 0; i < col; ++i) {
        var max = 0;
        for (var j = 0; j < row; ++j) {
            var str = grid[j][i];
            var len = str.toString().length;
            if (max < len) {
                max = len;
            }
        }
        ans[i] = max;
    }
    return ans;
};
var grid = [[1], [22], [333]];
grid = [[-15,1,3],[15,7,12],[5,6,-2]]
var ans = findColumnWidth(grid);
console.log(ans);
