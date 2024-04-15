/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function (nums, k) {
    let preSums = [nums[0]]
    const n = nums.length
    for (let i = 1; i < n; ++i) {
        preSums[i] = preSums[i - 1] + nums[i]
    }
    let ans = []
    for (let i = 0; i < n; ++i) {
        if (i - k < 0 || i + k >= n) {
            ans[i] = -1
        } else {
            let sum = preSums[i + k] - preSums[i - k] + nums[i - k]
            ans[i] = Math.floor(sum / (2 * k + 1))
        }
    }
    return ans

};