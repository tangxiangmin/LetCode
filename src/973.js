const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
    const q = new MinPriorityQueue()

    for (const p of points) {
        const d = dis(p)
        q.enqueue(p, d)
    }

    let ans = []
    while (k > 0) {
        k--
        ans.push(q.dequeue().element)
    }
    return ans

    function dis(p) {
        const [x, y] = p
        return Math.sqrt(x * x + y * y)
    }
};