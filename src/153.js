/**
 * @param {number[]} nums
 * @return {number}
 */

// 基本的做法是遍历一次，找到最小值
var findMin = function (nums) {
    return Math.min(...nums)
};


// 由于是升序数组在某点i处旋转，则pos[i]< pos[i-1] && pos[i] < pos[i+1]，因此可以使用二分查找
var findMin = function (nums) {
    var l = 0
    var r = nums.length - 1
    while (l < r) {
        var m = l + Math.floor((r - l) / 2)
        if (nums[l] < nums[r]) {
            return nums[l]
        }

        if (nums[m] > nums[r]) {
            // 最小值在右侧
            l = m + 1
        } else if (nums[m] < nums[r]) {
            // 最小值在左侧
            r = m
        }
    }
    return nums[l]
}
var nums = [4, 5, 6, 7, 0, 1, 2]
var res = findMin(nums)
console.log(res)