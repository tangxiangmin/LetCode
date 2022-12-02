/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix) {
    var len = matrix.length;
    for (var i = 0; i < len; ++i) {
        var row = {};
        var col = {};
        for (var j = 0; j < len; ++j) {
            col[matrix[i][j]] = 1;
            row[matrix[j][i]] = 1;
        }
        if (
            Object.keys(col).length !== len ||
            Object.keys(row).length !== len
        ) {
            return false;
        }
    }
    return true;
};

var matrix = [
    [1, 2, 3],
    [3, 1, 2],
    [2, 3, 1],
];
var ans = checkValid(matrix);
console.log(ans);
