// 判断矩阵是否是 Toeplitz Matrix
// 例子：斜线上所有元素相同
// 12341;
// 51234;
// 95123;

// 思路，判断左上角的元素是否相等即可

var isToeplitzMatrix = function(matrix) {
    var row = matrix.length,
        col = matrix[0].length;

    for (var i = 1; i < row; ++i){
        for (var j = 1; j < col; ++j){
            if (matrix[i][j] != matrix[i - 1][j - 1]) {
                return false;
            }
        }
    }
    return true
};
