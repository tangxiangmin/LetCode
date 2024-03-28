/**
 * @param {number[]} nums
 * @param {number[]} freq
 * @return {number[]}
 */

const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

// 使用最大堆
var mostFrequentIDs = function (nums, freq) {
    const n = nums.length
    const map = {}
    const ans = new Array(n)
    const queue = new MaxPriorityQueue()

    for (let i = 0; i < n; ++i) {
        const num = nums[i]
        const q = freq[i]

        if (!map[num]) {
            map[num] = 0
        }

        map[num] += q
        map[num] = Math.max(0, map[num])

        queue.enqueue(num, map[num])

        while (!queue.isEmpty() && queue.front()) {
            const { element, priority } = queue.front()
            if (map[element] !== priority) {
                queue.dequeue()
            } else {
                break
            }
        }

        ans[i] = queue.front().priority
    }
    return ans
};
var nums = [2, 3, 2, 1], freq = [3, 2, -3, 1]
var ans = mostFrequentIDs(nums, freq)
console.log(ans)