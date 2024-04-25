/**
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */

const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

// 肯定是优先移除石子数量更多的堆，这样减半的数字更多
var minStoneSum = function (piles, k) {
    const queue = new MaxPriorityQueue()
    let sum = 0
    for (const p of piles) {
        queue.enqueue(p, p)
        sum += p
    }
    while (k > 0) {
        const { element, } = queue.dequeue()
        const left = Math.ceil(element / 2)
        sum -= (element - left)
        queue.enqueue(left, left)
        k--
    }
    return sum
};
var piles = [5, 4, 9], k = 2
var ans = minStoneSum(piles, k)
console.log(ans)