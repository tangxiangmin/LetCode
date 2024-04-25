const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minGroups = function (intervals) {
    intervals.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1]
        return a[0] - b[0]
    })

    const queue = new MinPriorityQueue()
    for (const [s, e] of intervals) {
        if (queue.isEmpty()) {
            queue.enqueue(e, e)
        } else {
            const { element, } = queue.front()
            if (s > element) {
                queue.dequeue()
                queue.enqueue(s, e)
            } else {
                queue.enqueue(e, e)
            }
        }
    }
    return queue.size()
};
var intervals = [[5, 10], [6, 8], [1, 5], [2, 3], [1, 10]]
// intervals = [[1, 3], [5, 6], [8, 10], [11, 13]]
var ans = minGroups(intervals)
console.log(ans)