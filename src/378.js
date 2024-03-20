/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
const { MinPriorityQueue } = require('@datastructures-js/priority-queue')
// 思路：每行和每列都是升序的，因此可以按对角线遍历，依次入最大堆，当对的size等于k时返回堆顶的值
var kthSmallest = function (matrix, k) {
    const m = matrix.length
    const n = matrix[0].length

    let i = 0
    let j = 0
    const pq = new MinPriorityQueue() // 相同元素不入队列？
    let prev = matrix[i][j]
    if (k === 1) return prev
    let row = 0
    let col = 0
    for (let i = row; i < m; ++i) {

        for (let j = col; j < n; ++j) {
            const val = matrix[i][j]
            pq.enqueue(val, val)
        }
        for (let k = row + 1; k < m; ++k) {
            const val = matrix[k][col]
            pq.enqueue(val, val)
        }
        col++
        row++
        if (pq.size() > k) {
            console.log(pq.toArray().map(row=>row.element))
            const { element } = pq.toArray()[k - 1]
            return element
        }
    }

    return pq.back().element
};

var matrix = [
    [1, 5, 9],
    [10, 11, 13],
    [12, 13, 15]
], k = 8 // 13

matrix =
    [[1, 3, 5], [6, 7, 12], [11, 14, 14]], k = 5 // 7

matrix = [[1, 2], [1, 3]], k = 4
matrix =
    [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], k = 5 // 5
var ans = kthSmallest(matrix, k)
console.log(ans)