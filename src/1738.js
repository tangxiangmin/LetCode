/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */

const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

// 二维前缀和 + 排序
// 两个相同的数字异或之后为0,0与任何数字异或为该数字本身，因此重复的pre[i - 1][j - 1]计算了两次，会被抵消掉
var kthLargestValue = function (matrix, k) {
    const m = matrix.length, n = matrix[0].length;
    const pre = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
    const results = [];
    for (let i = 1; i < m + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            pre[i][j] = pre[i - 1][j] ^ pre[i][j - 1] ^ pre[i - 1][j - 1] ^ matrix[i - 1][j - 1];
            results.push(pre[i][j]);
        }
    }
    results.sort((a, b) => b - a);
    return results[k - 1];
}

var matrix = [[5, 2], [1, 6]], k = 1
matrix = [[5, 2], [1, 6]], k = 2
matrix = [[5, 2], [1, 6]], k = 4
var ans = kthLargestValue(matrix, k)
console.log(ans)