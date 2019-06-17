/**
 * https://leetcode-cn.com/explore/featured/card/array-and-string/199/introduction-to-2d-array/774/
 * @param {number[][]} matrix
 * @return {number[]}
 */
// 参考 https://www.cnblogs.com/grandyang/p/6414461.html
var findDiagonalOrder = function(matrix) {
    var m = matrix.length;
    if(m < 0){
        return []
    }
    var n = matrix[0].length;
    var ans = [];
    var r = 0, c = 0; // 指针
    // 1 右上角遍历 [r-1, c+1]
    // -1 左下角遍历 [r+1, c-1]
    var k = 0;
    var dirs = [[-1, 1], [1, -1]];

    for (var i = 0; i < m * n; ++i) {
        ans[i] = matrix[r][c];
        r += dirs[k][0];
        c += dirs[k][1];
        if (r >= m) {
            r = m - 1;
            c += 2;
            k = 1 - k;
        }
        if (c >= n) {
            c = n - 1;
            r += 2;
            k = 1 - k;
        }
        if (r < 0) {
            r = 0;
            k = 1 - k;
        }
        if (c < 0) {
            c = 0;
            k = 1 - k;
        }
    }
    return ans;
};

var arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
var res = findDiagonalOrder(arr); // [1,2,4,7,5,3,6,8,9]
console.log(res);
