const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function (a, b, c) {

    const queue = new MaxPriorityQueue()
    queue.enqueue(a, a)
    queue.enqueue(b, b)
    queue.enqueue(c, c)

    let ans = 0

    while (queue.size() >= 2) {
        let { element: a, priority: ap } = queue.dequeue()
        let { element: b, priority: bp } = queue.dequeue()
        ap--
        bp--
        ans++
        if (ap > 0) {
            queue.enqueue(a, ap)
        }
        if (bp > 0) {
            queue.enqueue(b, bp)
        }
    }
    return ans

};