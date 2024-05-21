/**
 * @param {number[]} nums
 * @param {number[]} pattern
 * @return {number}
 */
// 根据题意模拟
var countMatchingSubarrays = function (nums, pattern) {
    const n = nums.length
    const m = pattern.length
    let ans = 0
    for (let i = 0; i < n - m + 1; ++i) {
        let flag = true
        for (let k = 0; k < m; ++k) {
            flag = flag && (pattern[k] === 1 && nums[i + k + 1] > nums[i + k]) || (pattern[k] === 0 && nums[i + k + 1] == nums[i + k]) || (pattern[k] == -1 && nums[i + k + 1] < nums[i + k])
            if (!flag) break
        }
        if (flag) {
            ans++
        }
    }
    return ans
};