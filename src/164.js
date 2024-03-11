/**
 * @param {number[]} nums
 * @return {number}
 */
// 先排序再解答
var maximumGap = function (nums) {
    nums.sort((a, b) => a - b)
    let max = 0
    for (let i = 0; i < nums.length - 1; ++i) {
        max = Math.max(Math.abs(nums[i] - nums[i + 1]), max)
    }
    return max
};
// 题目要求使用一种O(n)的解法，可以使用基数排序或者桶排序
var maximumGap = function (nums) {}