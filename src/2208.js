const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

/**
 * @param {number[]} nums
 * @return {number}
 */
var halveArray = function (nums) {
    const queue = new MaxPriorityQueue()
    let sum = 0
    for (const num of nums) {
        sum += num
        queue.enqueue(num, num)
    }
    let cnt = 0
    let ans = 0
    while (!queue.isEmpty()) {
        const { element, priority } = queue.dequeue()
        ans++
        const val = element / 2
        cnt += val
        if (cnt >= sum / 2) {
            return ans
        }
        queue.enqueue(val, val)
    }

};