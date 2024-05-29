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
    let l = 0
    let r = nums.length - 1

    while (l < r) {
        if (nums[l] < nums[r]) {
            // 说明搜索区间本身是有序的，不需要继续搜索
            break
        }
        const mid = (l + r) >> 1
        if (nums[mid] > nums[r]) {
            l = mid + 1
        } else if (nums[mid] < nums[l]) {
            r = mid
        }
    }
    return nums[l]
}

// 另外一种搜索方式
var findMin = function (nums) {
    let l = 0
    let r = nums.length - 1
    // 搜索区间至少要2个元素，才可以比较
    while (l < r) {
        const mid = (l + r) >> 1
        if (nums[l] < nums[r]) {
            break
        }
        // 由于mid是向下取整，需要处理左侧只有一个元素的情况
        if (nums[mid] === nums[l]) {
            l = mid + 1
        } else if (nums[mid] > nums[l]) {
            // 左侧是有序的
            l = mid + 1
        } else if (nums[mid] < nums[r]) {
            r = mid
        }
    }
    return nums[l]
};

// 另外一种视角，与r比较
var findMin = function (nums) {
    let l = 0
    let r = nums.length - 1
    // 搜索区间至少要2个元素，才可以比较
    while (l < r) {
        const mid = (l + r) >> 1
        if (nums[mid] > nums[r]) {
            l = mid + 1
        } else if (nums[mid] < nums[r]) {
            r = mid
        }
    }
    return nums[l]
}

var nums = [4, 5, 6, 7, 0, 1, 2] // 0
nums = [3, 4, 5, 0, 2] // 1
nums = [4, 1, 2, 3] // 1
nums = [4, 1] // 1
// nums = [11, 13, 15, 17] // 11
// nums = [4, 5, 1, 2]
nums = [1, 2, 3, 4]
var res = findMin(nums)
console.log(res)