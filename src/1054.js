const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function (barcodes) {
    const queue = new MaxPriorityQueue()
    const map = {}
    for (const num of barcodes) {
        if (!map[num]) map[num] = 0
        map[num]++
    }
    for (const key in map) {
        queue.enqueue(+key, map[key])
    }

    const ans = []
    while (!queue.isEmpty()) {
        let { element: a, priority: ap } = queue.dequeue()

        ans.push(a)
        ap--
        if (queue.isEmpty()) break
        let { element: b, priority: bp } = queue.dequeue()
        ans.push(b)
        bp--
        if (bp > 0) {
            queue.enqueue(b, bp)
        }
        if (ap > 0) {
            queue.enqueue(a, ap)
        }
    }
    return ans
};
var barcodes = [1, 1, 1, 2, 2, 2]
barcodes = [1, 1, 1, 1, 2, 2, 3, 3]
var ans = rearrangeBarcodes(barcodes)
console.log(ans)