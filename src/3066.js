const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    const queue = new MinPriorityQueue()

    for (const num of nums) {
        queue.enqueue(num, num)
    }
    let ans = 0
    while (queue.size() >= 2) {
        const { element: x } = queue.dequeue()
        if (x >= k) {
            return ans
        }
        ans++
        const { element: y } = queue.dequeue()
        const val = x * 2 + y
        queue.enqueue(val, val)
    }
};