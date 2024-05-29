/**
 * @param {number[]} nums
 * @return {number}
 */

// 思路，求峰值
// 暴力解法，O(n), 不满足O(logN)时间复杂度的要求
var findPeakElement = function (nums) {
    var len = nums.length
    if (len === 1) {
        return 0
    }
    if (nums[0] > nums[1]) {
        return 0
    }
    if (nums[len - 1] > nums[len - 2]) {
        return len - 1
    }
    for (var i = 1; i < len - 1; ++i) {
        var prev = nums[i - 1]
        var next = nums[i + 1]
        var cur = nums[i]
        if (cur > prev && cur > next) {
            return i
        }
    }
};
// O(logN)可以想到使用二分查找,在题目描述中出现了 nums[-1] = nums[n] = -∞，这就代表着 只要数组中存在一个元素比相邻元素大，那么沿着它一定可以找到一个峰值
var findPeakElement = function (nums) {
    var l = 0
    var r = nums.length - 1
    while (l < r) {
        var m = l + Math.floor((r - l) / 2)
        if (nums[m] > nums[m + 1]) {
            r = m
        } else {
            l = m + 1
        }
    }
    return l
}

var nums = [1, 2, 3, 1]
nums = [1, 2, 1, 3, 5, 6, 4]
nums = [1]
var ans = findPeakElement(nums)
console.log(ans)