/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 思路1：使用空间m+n
var setZeroes = function (matrix) {
    var r = matrix.length
    if (!r) {
        return []
    }
    // 保存需要置为0的行和列
    var rows = []
    var cols = []
    var c = matrix[0].length
    for (var i = 0; i < r; ++i) {
        // 遍历每一行
        for (var j = 0; j < c; ++j) {
            var cur = matrix[i][j]
            if (cur === 0) {
                if (!rows.includes(i)) {
                    rows.push(i)
                }
                if (!cols.includes(j)) {
                    cols.push(j)
                }
            }
        }
    }
    // 重置
    for (var i = 0; i < r; ++i) {
        for (var j = 0; j < c; ++j) {
            if (rows.includes(i) || cols.includes(j)) {
                matrix[i][j] = 0
            }
        }
    }
    return matrix
};

var matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
]
var res = setZeroes(matrix)
console.log(res)