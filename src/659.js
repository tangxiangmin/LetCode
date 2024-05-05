/**
 * @param {number[]} nums
 * @return {boolean}
 */

const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

// 思路：注意题目要求的是至少三个连续整数，不能是重复的，同时子序列可以是在原数组中不连续的
// 由于数组是升序的，我们先从最小值开始构建连续三个，对于不足三个的，我们可以将它放在前一个完成的连续子序列前（如果不存在前一个连续子序列，则返回false）
var isPossible = function (nums) {
    const map = new Map()
    for (const num of nums) {
        if (!map.has(num)) {
            map.set(num, new MinPriorityQueue())
        }
        if (map.has(num - 1)) {
            const queue = map.get(num - 1)
            const preLen = queue.dequeue().priority
            if (queue.isEmpty()) {
                map.delete(num - 1)
            }
            map.get(num).enqueue(num, preLen + 1)
        } else {
            map.get(num).enqueue(num, 1)
        }
    }
    for (let [key, value] of map.entries()) {
        if (value.front()['priority'] < 3) {
            return false;
        }
    }
    return true
};


var nums = [1, 2, 3, 3, 4, 4, 5, 5]
nums = [1, 2, 3, 4, 5, 5, 6, 7]
var res = isPossible(nums)
console.log(res)