/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 思路：每次旋转4条边
var rotate = function (matrix) {
    var n = matrix.length
    step(0, 0, n, n)
    return matrix

    function step(r0, c0, r1, c1) {
        if (r0 >= r1 || c0 >= c1) {
            return
        }
        var tmp2 = matrix[r0].slice(c0, c1)
        var tmp = []
        // 把top旋转到right, tmp临时存放right的值
        for (var i = r0; i < r1; ++i) {
            tmp.push(matrix[i][c1 - 1])
            matrix[i][c1 - 1] = tmp2.shift()
        }
        // 把right旋转到bottom，tmp2保存bottom的值
        for (var i = c0; i < c1; ++i) {
            tmp2.push(matrix[r1 - 1][i])
            matrix[r1 - 1][i] = tmp.pop()
        }
        // 把bottom旋转到left,tmp保存left的值，此处不再需要修改matrix[r1-1][c0]的值
        for (var i = r0; i < r1 - 1; ++i) {
            tmp.push(matrix[i][c0])
            matrix[i][c0] = tmp2.shift()
        }
        // 把left旋转到top，此处不再需要修改matrix[r0][c1-1]和matrix[r0][c0]的值
        for (var i = c0 + 1; i < c1 - 1; ++i) {
            matrix[r0][i] = tmp.pop()
        }
        step(r0 + 1, c0 + 1, r1 - 1, c1 - 1)
    }
};

var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
// [
//     [7, 4, 1],
//     [8, 5, 2],
//     [9, 6, 3]
// ]
var res = rotate(matrix)
console.log(res)