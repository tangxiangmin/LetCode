/**
 * @param {number} n
 * @return {number[][]}
 */
// 思路：按照四个方位的顺序填充数据
var generateMatrix = function (n) {
    var len = n * n
    var ans = []
    for (var i = 0; i < n; ++i) {
        ans[i] = []
    }

    var r0 = 0, c0 = 0, r1 = n - 1, c1 = n - 1
    var r = 0, c = 0
    var dir = 'top'
    for (var i = 1; i <= len; ++i) {
        ans[r][c] = i
        if (dir === 'top') {
            c++
            if (c > c1) {
                dir = 'right'
                c1--
                r++
                c--
            }
        } else if (dir === 'right') {
            r++
            if (r > r1) {
                dir = 'bottom'
                r1--
                c--
                r--
            }
        } else if (dir === 'bottom') {
            c--
            if (c < c0) {
                dir = 'left'
                c0++
                r--
                c++
            }
        } else if (dir === 'left') {
            r--
            if (r <= r0) {
                dir = 'top'
                r0++
                c++
                r++
            }
        }
    }
    return ans
};

var n = 4
var res = generateMatrix(n)
console.log(res)