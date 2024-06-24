/**
 * @param {number[]} nums
 * @return {number}
 */

const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

// bf
var partitionDisjoint = function (nums) {
    const n = nums.length
    let lmax = 0
    for (let i = 0; i < n; ++i) {
        lmax = Math.max(nums[i], lmax)

        let flag = true
        for (let j = i + 1; j < n; ++j) {
            if (nums[j] < lmax) {
                flag = false
                break
            }
        }
        if (flag) {
            return i + 1
        }
    }
};
// 左边的最大值，要小于等于右边的最小值，可以使用单调递增栈
var partitionDisjoint = function (nums) {
    const n = nums.length
    // stack中保存的都是>=stack[0]的数字，因此后续遍历的时候只需要考虑与stack[0]的数字做比较
    const stack = []
    for (const num of nums) {
        while (stack.length && stack[stack.length - 1] > num) {
            stack.pop()
        }
        stack.push(num)
    }
    let lmax = 0
    for (let i = 0; i < n; ++i) {
        const num = nums[i]
        lmax = Math.max(lmax, num)
        if (num === stack[0]) {
            stack.shift()
        }
        if (lmax <= stack[0]) {
            return i + 1
        }
    }
}
// 还可以使用一个额外的数组，来保存每个数字右侧的最小值
var partitionDisjoint = function (nums) {
    const n = nums.length
    const arr = new Array(n).fill(Infinity)
    arr[n - 1] = nums[n - 1]
    for (let i = n - 2; i >= 0; --i) {
        arr[i] = Math.min(arr[i + 1], nums[i])
    }

    let lmax = nums[0]
    for (let i = 1; i < n; ++i) {
        if (lmax <= arr[i]) {
            return i
        }
        lmax = Math.max(nums[i], lmax)
    }
}
var nums = [5, 0, 3, 8, 6]
// nums = [1, 1, 1, 0, 6, 12]
// nums = [7, 7, 8, 9]
var ans = partitionDisjoint(nums)
console.log(ans)