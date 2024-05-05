/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
const { MinPriorityQueue } = require('@datastructures-js/priority-queue')
// 思路：每行和每列都是升序的,可以排序
var kthSmallest = function (matrix, k) {
    const m = matrix.length
    const n = matrix[0].length

    let row = 0
    let col = 0
    const queue = new MinPriorityQueue()
    while (row < m && col < n) {
        let j = col
        let i = row
        while (j < n && i < m) {
            if (matrix[row][j] <= matrix[i][col]) {
                queue.enqueue(matrix[row][j])
                j++
                if (row === i) {
                    i++
                }
            } else {
                queue.enqueue(matrix[i][col])
                i++
                if (col === j) {
                    j++
                }
            }
        }
        while (j < n) {
            queue.enqueue(matrix[row][j])
            j++
        }
        while (i < m) {
            queue.enqueue(matrix[i][col])
            i++
        }
        row++
        col++
        if (queue.size >= k) {
            break
        }
    }
    return queue.toArray()[k - 1].element

    // console.log(queue.toArray().map(row => row.element))
};

var matrix = [[1, 5, 9], [10, 11, 13], [12, 13, 15]], k = 8
matrix = [[1, 3, 5], [6, 7, 12], [11, 14, 14]], k = 5
var ans = kthSmallest(matrix, k)
console.log(ans)