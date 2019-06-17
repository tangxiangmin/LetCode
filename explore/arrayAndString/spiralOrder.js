/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    var row = matrix.length;
    if (row <= 0) {
        return [];
    }
    var col = matrix[0].length;
    var r = 0;
    var c = 0;
    var ans = [];

    var dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // 所有方向
    var k = 0; // 当前方向
    var len = row * col;
    var r0 = 0, r1 = row, c0 = 0, c1 = col;
    for (var i = 0; i < len; ++i) {
        ans[i] = matrix[r][c];
        r += dirs[k][0];
        c += dirs[k][1];
        if (c >= c1) {
            c = c1 - 1;
            r += 1;
            k = 1;
            r0++
        }
        if (r >= r1) {
            r = r1 - 1;
            k = 2;
            c -= 1;
            c1--
        }
        if (c < c0) {
            c = c0;
            r -= 1;
            k = 3;
            r1--
        }
        if (r < r0) {
            r = r0;
            c += 1;
            k = 0;
            c0++
        }
    }

    return ans;
};

var arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];
// arr = [
//     [ 1, 2, 3 ],
//     [ 4, 5, 6 ],
//     [ 7, 8, 9 ]
// ]

var res = spiralOrder(arr);
console.log(res);
