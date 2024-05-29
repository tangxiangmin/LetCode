/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 滑动窗口，统计符合要求的最长子数组
var maxSubarrayLength = function (nums, k) {
    const n = nums.length

    let l = 0
    let r = 0
    const map = {}
    let ans = 0
    while (r < n) {
        const ch = nums[r]
        if (!map[ch]) map[ch] = 0
        map[ch]++
        while (map[ch] > k) {
            map[nums[l]]--
            l++
        }
        r++
        ans = Math.max(ans, r - l)
    }
    return ans
};
var nums = [1, 2, 3, 1, 2, 3, 1, 2], k = 2
nums = [3, 1, 1], k = 1
var ans = maxSubarrayLength(nums, k)
console.log(ans)