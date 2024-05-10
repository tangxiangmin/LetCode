/**
 * @param {number[]} nums
 * @return {number}
 */
// 思路，跟求子数组的最大和一样，这里由于是绝对值的大小，还需要保存子数组的最小值
var maxAbsoluteSum = function (nums) {
    const max = []
    const min = []
    const n = nums.length
    let ans = 0
    for (let i = 0; i < n; ++i) {
        max[i] = nums[i] + Math.max(i === 0 ? 0 : max[i - 1], 0)
        min[i] = nums[i] + Math.min(i === 0 ? 0 : min[i - 1], 0)
        ans = Math.max(ans, Math.abs(max[i]), Math.abs(min[i]))
    }
    return ans
};