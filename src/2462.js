/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */

const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

// 先BF模拟一下看看
var totalCost = function (costs, k, candidates) {
    let ans = 0
    while (k > 0) {

        let min = 0
        for (let i = 0; i < candidates; ++i) {
            if (i >= costs.length) break
            if (costs[min] > costs[i]) {
                min = i
            }
        }
        for (let i = Math.max(costs.length - candidates, 0); i < costs.length; ++i) {
            if (costs[min] > costs[i]) {
                min = i
            }
        }
        ans += costs[min]
        costs.splice(min, 1)
        k--
    }
    return ans
};

// 要在动态变化的数组中找到最小值，可以使用最小堆
var totalCost = function (costs, k, candidates) {
    const queue = new MinPriorityQueue()
    let ans = 0


    const end = Math.max(costs.length - candidates, candidates)
    let r = costs.length - 1
    for (; r >= end; --r) {
        queue.enqueue(r, costs[r])
    }
    let l = 0
    for (; l < candidates; ++l) {
        if (l >= costs.length) break
        queue.enqueue(l, costs[l])
    }

    while (k > 0) {
        const { element, priority } = queue.dequeue()
        ans += priority
        if (l <= r) {
            if (element < r) {
                queue.enqueue(l, costs[l])
                l++
            } else {
                queue.enqueue(r, costs[r])
                r--
            }
        }
        k--
    }
    return ans
}

var costs = [17, 12, 10, 2, 7, 2, 11, 20, 8], k = 3, candidates = 4
costs = [31, 25, 72, 79, 74, 65, 84, 91, 18, 59, 27, 9, 81, 33, 17, 58], k = 11, candidates = 2
costs = [10, 1, 11, 10], k = 2, candidates = 1
var ans = totalCost(costs, k, candidates)
console.log(ans)