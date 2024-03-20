const { MinPriorityQueue } = require('@datastructures-js/priority-queue')

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 使用堆
var numberGame = function (nums) {
    let ans = []
    const numbersQueue = MinPriorityQueue.from(nums.map(num => [num, num]))
    while (numbersQueue.size()) {
        let { element: a } = numbersQueue.dequeue()
        let { element: b } = numbersQueue.dequeue()
        ans.push(b)
        ans.push(a)
    }
    return ans
};
// 直接排序看起来也可以
var numberGame = function (nums) {
    nums.sort((a, b) => b - a)
    const ans = []
    while (nums.length) {
        let a = nums.pop()
        let b = nums.pop()
        ans.push(b)
        ans.push(a)
    }
    return ans
}
var nums = [5, 4, 2, 3]
// nums = [2,5]
var ans = numberGame(nums)
console.log(ans)