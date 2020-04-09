/**
 * @param {number[][]} triangle
 * @return {number}
 */

// 思路：BF 列举每一条路径的解法
var minimumTotal = function (triangle) {
    var len = triangle.length;
    if (!len) return 0;

    var row = [...triangle[0]];
    for (var i = 1; i < len; ++i) {
        var next = triangle[i];
        var ans = [];

        ans.push(row[0] + next[0]);

        for (var j = 1; j < next.length - 1; ++j) {
            ans.push(row[j - 1] + next[j]);
            ans.push(row[j] + next[j]);
        }

        ans.push(row[row.length - 1] + next[next.length - 1]);

        row = ans;
    }
    return Math.min(...row);
};

// 思路：从下到上，依次保存相邻较小值的结果
var minimumTotal = function (triangle) {
    var len = triangle.length;
    for (var i = len - 1; i >= 0; --i) {
        for (var j = 0; j < i; ++j) {
            triangle[i - 1][j] += Math.min(triangle[i][j], triangle[i][j + 1]);
        }
    }
    return triangle[0][0];
};

// [2]
// [5, 6] -> [6,5,7]
// [11,10,11,13]
var triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
var res = minimumTotal(triangle);
console.log(res);
