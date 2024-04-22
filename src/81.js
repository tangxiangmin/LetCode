/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
// 旋转数组相当于两个升序数组，且左边部分的升序数组的最小值，还要 >= 右侧升序数组的最大值
// mid <= r, l >=r
var search = function (nums, target) {
    let l = 0
    let r = nums.length - 1
    while (l <= r) {
        const mid = (l + r) >> 1
        // console.log(l, mid, r, nums[mid])
        if (nums[mid] === target || nums[l] == target || nums[r] === target) {
            return true
        }
        // 由于存在相同的元素，首位中间元素均相同的话，无法判断选点的位置
        while (nums[l] === nums[mid] && nums[mid] === nums[r]) {
            l++
            r--
        }
        if (nums[mid] <= nums[r] && nums[l] >= nums[r]) {
            // 旋点在左边，右侧是升序的
            if (nums[mid] < target && nums[r] > target) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        } else {
            // 旋点在右边
            if (nums[mid] > target && nums[l] < target) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
    }
    return nums[l] === target || nums[r] === target
};

var nums = [1, 0, 1, 1, 1], target = 0
nums = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1], target = 2
// nums = [10, 10, 10, -10, -10, -10, -10, -9, -9, -9, -9, -9, -9, -9, -8, -8, -8, -8, -8, -8, -8, -8, -7, -7, -7, -7, -6, -6, -6, -5, -5, -5, -4, -4, -4, -4, -3, -3, -2, -2, -2, -2, -2, -2, -2, -2, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 10, 10], target = -6
var ans = search(nums, target)
console.log(ans)