/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 思路：可以从下向上遍历
// 由于题目要求不使用额外的内存，则先对角线左上-右下兑换，然后
var rotate = function (matrix) {
    var row = matrix.length;
    if (!row) return [];

    for (var i = 0; i < row; ++i) {
        for (var j = i + 1; j < row; ++j) {
            var tmp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = tmp;
        }
    }
    console.log(matrix)
    var mid = row >> 1;
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < mid; j++) {
            var tmp = matrix[i][j];
            matrix[i][j] = matrix[i][row - 1 - j];
            matrix[i][row - 1 - j] = tmp;
        }
    }
    return matrix
};

var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
var res = rotate(matrix);
console.log(res);
