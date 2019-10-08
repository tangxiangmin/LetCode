/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 思路：根据题意，该矩阵从左往右、从前向后遍历是一个升序数组，因此使用二分查找
var searchMatrix = function (matrix, target) {
    var r = matrix.length
    if (!r) return false
    var c = matrix[0].length
    if (!c) {
        return false
    }

    var r0 = 0, r1 = r
    while (r0 <= r1) {
        var mid = Math.floor((r0 + r1) / 2)
        var row = matrix[mid]
        if (!row) {
            break
        }
        if (row[0] > target) {
            r1 = mid - 1
        } else if (row[c - 1] < target) {
            r0 = mid + 1
        } else {
            // 在当前行，开始
            var c0 = 0, c1 = c
            while (c0 <= c1) {
                var mid2 = Math.floor((c0 + c1) / 2)
                var num = row[mid2]
                if (num < target) {
                    c0 = mid2 + 1
                } else if (num > target) {
                    c1 = mid2 - 1
                } else {
                    return true
                }
            }
            break
        }
    }
    return false
};
var matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
]
var target = 3

// matrix = [[1]]
// target = 2
var res = searchMatrix(matrix, target)
console.log(res)