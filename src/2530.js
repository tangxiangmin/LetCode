const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function (nums, k) {
    const queue = new MaxPriorityQueue()
    for (const num of nums) {
        queue.enqueue(num, num)
    }
    let ans = 0
    while (k > 0) {
        let { element } = queue.dequeue()
        ans += element
        element = Math.ceil(element / 3)
        queue.enqueue(element, element)
        k--
    }
    return ans
};
var nums = [10, 10, 10, 10, 10], k = 5
var ans = maxKelements(nums, k)
console.log(ans)