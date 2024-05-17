/**
 * @param {number[]} nums
 * @return {number}
 */
var findValueOfPartition = function (nums) {
    nums.sort((a, b) => a - b)

    const n = nums.length
    let val = Infinity
    for (let i = 0; i < n - 1; ++i) {
        val = Math.min(nums[i + 1] - nums[i], val)
    }
    return val
};