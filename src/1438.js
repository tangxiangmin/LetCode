/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */

// 思路：需要保存窗口中的最大值和最小值
var longestSubarray = function (nums, limit) {
    const max = []
    const min = []
    const n = nums.length
    let l = 0
    let r = 0
    let ans = 0
    while (r < n) {
        while (max.length && max[max.length - 1] < nums[r]) {
            max.pop()
        }
        while (min.length && min[min.length - 1] > nums[r]) {
            min.pop()
        }
        max.push(nums[r])
        min.push(nums[r])
        while (max.length && min.length && max[0] - min[0] > limit) {
            if (nums[l] === min[0]) {
                min.shift()
            }
            if (nums[l] === max[0]) {
                max.shift()
            }
            l++
        }
        ans = Math.max(ans, r - l + 1)
        r++
    }
    return ans
};

var nums = [8, 2, 4, 7], limit = 4
// nums = [10, 1, 2, 4, 7, 1], limit = 5
nums = [1, 5, 6, 7, 8, 10, 6, 5, 6], limit = 4 // 5
var ans = longestSubarray(nums, limit)
console.log(ans)