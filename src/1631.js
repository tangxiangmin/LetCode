/**
 * @param {number[][]} heights
 * @return {number}
 */

const { MinPriorityQueue } = require("@datastructures-js/priority-queue");


// 逆向模拟，要到达[m-1][n-1]，则上一步必定在[m-2][n-1]和[m-1][n-2]中产生
var minimumEffortPath = function (heights) {
    const m = heights.length
    const n = heights[0].length

    const queue = new MinPriorityQueue()
    queue.enqueue([0, 0], 0)


};

var heights = [[1, 2, 2], [3, 8, 2], [5, 3, 5]]
var ans = minimumEffortPath(heights)
console.log(ans)