/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    nums.sort((a, b) => a - b)
    const n = nums.length
    for (let i = 0; i < n; ++i) {
        if (nums[i] >= k) {
            return i
        }
    }
    return n
};