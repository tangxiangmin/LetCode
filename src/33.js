/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 思路：使用二分查找满足复杂度logn
// 数组原本升序，旋转后则变成两段升序数组，假设分界点为i,则A[0...i]与A[i...len]为两段升序数组，
// 且A[0]为第一段最小值，A[len-1]为第二段最大值
var search = function (nums, target) {
    var len = nums.length
    // 首先找到分界点
    var point = findPoint()
    // 根据分界点确定二分查找的边界
    if (!point) {
        var l = 0;
        var r = len - 1
    } else if (target >= nums[0]) {
        var l = 0;
        var r = point - 1
    } else if (target <= nums[len - 1]) {
        var l = point
        var r = len - 1
    }

    while (l <= r) {
        var mid = Math.floor((l + r) / 2)
        if (nums[mid] > target) {
            r -= 1
        } else if (nums[mid] < target) {
            l += 1
        } else {
            return mid
        }
    }
    return -1
    // 找临界点
    function findPoint() {
        var l = 0
        var r = len - 1
        if (nums[l] < nums[r]) {
            return 0
        }
        while (l <= r) {
            var mid = Math.floor((l + r) / 2)
            if (nums[mid] > nums[mid + 1]) {
                return mid + 1
            } else {
                if (nums[mid] < nums[l]) {
                    r = mid - 1
                } else {
                    l = mid + 1
                }
            }
        }
        return 0
    }
};
var nums = [4, 5, 6, 7, 0, 1, 2], target = 0
// 7 > 4，右侧寻找
// 0 < 2 ,左侧寻找
// nums = [1], target = 1
nums = [3, 1], target = 1
var res = search(nums, target)
console.log(res)