/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 二分，每次只能排除四分之一的区域，这个居然会超时...
var searchMatrix = function (matrix, target) {
    const m = matrix.length
    const n = matrix[0].length

    // console.table(matrix)
    return find(0, m - 1, 0, n - 1)

    function find(xl, xr, yl, yr) {
        if (xl > xr || yl > yr) return false
        const y = (yl + yr) >> 1
        const x = (xl + xr) >> 1

        const val = matrix[x][y]
        if (val === target) return true
        if (val > target) {
            return find(xl, xr, yl, y - 1) || find(xl, x - 1, y, yr)
        } else if (val < target) {
            return find(x + 1, xr, yl, y) || find(xl, xr, y + 1, yr)
        }
    }
};

// 按行排除
var searchMatrix = function (matrix, target) {
    const m = matrix.length
    const n = matrix[0].length
    let i = 0
    let j = n - 1
    while (i < m && j >= 0) {
        if (matrix[i][j] === target) return true
        if (matrix[i][j] < target) {
            i++ // 这一行左右元素都小于target
        } else if (matrix[i][j] > target) {
            j-- // 这一列所有元素都大于target
        }
    }
    return false
}
var matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]], target = 5
// matrix = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], target = 20
// matrix = [[1, 3, 5]], target = 1
matrix = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]], target = 5
// matrix = [[3, 3, 8, 13, 13, 18], [4, 5, 11, 13, 18, 20], [9, 9, 14, 15, 23, 23], [13, 18, 22, 22, 25, 27], [18, 22, 23, 28, 30, 33], [21, 25, 28, 30, 35, 35], [24, 25, 33, 36, 37, 40]], target = 21

var ans = searchMatrix(matrix, target)
console.log(ans)