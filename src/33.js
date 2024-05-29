/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 思路：使用二分查找满足复杂度logn
// 数组原本升序，旋转后则变成两段升序数组，假设分界点为i,则A[0...i]与A[i...len]为两段升序数组，
// 且A[0]为第一段最小值，A[len-1]为第二段最大值

var search = function (nums, target) {
    let l = 0
    let r = nums.length - 1
    // 先找到断点
    while (l < r) {
        var m = (l + r) >> 1
        if (nums[l] < nums[r]) {
            break
        }

        if (nums[m] > nums[r]) {
            // 最小值在右侧
            l = m + 1
        } else if (nums[m] < nums[r]) {
            // 最小值在左侧
            r = m
        }
    }
    if (l === 0) {
        return find(0, nums.length - 1)
    }
    return target >= nums[0] ? find(0, l - 1) : find(l, nums.length - 1)

    function find(l, r) {
        while (l <= r) {
            const mid = (l + r) >> 1
            if (nums[mid] === target) {
                return mid
            } else if (nums[mid] < target) {
                l = mid + 1
            } else if (nums[mid] > target) {
                r = mid - 1
            }
        }
        return -1
    }
};


var nums = [4, 5, 6, 7, 0, 1, 2], target = 0
nums = [3, 1], target = 1
nums = [1]
// nums = [1, 3, 5], target = 0
// nums = [1, 3], target = 1
nums = [5, 1, 3], target = 5
// nums = [8, 9, 2, 3, 4], target = 9
var res = search(nums, target)
console.log(res)