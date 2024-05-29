/**
 * @param {number[]} nums
 * @return {number}
 */

// 与153相似，但是有重复元素
// 参考的题解
var findMin = function (nums) {
    var left = 0;
    var right = nums.length - 1;
    while (left < right) {
        var mid = left + (right - left) / 2;
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else if (nums[mid] < nums[right]) {
            right = mid;
        } else {
            //由于会出现重复元素，所以当中值与最右值相等时，
            //并不能判断区间往哪个方向改变
            //但由于中值已经与最右值相等，所以，
            //即使最右值最小，但也有中值作为替代
            //所以，此时可以将最右值剔除区间
            right--;
        }
    }
    return nums[left];
};

var findMin = function (nums) {
    let l = 0
    let r = nums.length - 1
    let start = nums[l]
    while (l < r && nums[l] === nums[r]) {
        l++
        r--
    }
    while (l < r) {
        if (nums[l] < nums[r]) {
            break
        }
        const mid = (l + r) >> 1
        if (nums[mid] > nums[l]) {
            l = mid + 1
        } else if (nums[mid] === nums[l]) {
            l = mid + 1
        } else if (nums[mid] < nums[r]) {
            r = mid
        } else if (nums[mid] === nums[r]) {
            r = mid
        }
    }
    return Math.min(nums[l], start)
}

var findMin = function (nums) {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        const mid = (l + r) >> 1;
        if (nums[mid] > nums[r]) { // 最小值在右半部分
            l = mid + 1;
        } else if (nums[mid] < nums[r]) { // 最小值在左半部分或者就是mid
            r = mid;
        } else { 
            // 当nums[mid]和nums[r]相等时，无法确定最小值的确切位置，因此只能r减一缩小搜索范围
            // 即使r是最小的元素，也可以将其减1，缩小搜索范围，因为nums[mid]和nums[r]这个时候是相等的
            r--;
        }
    }
    return nums[l];
}

var nums = [2, 2, 2, 1]
// nums = [2, 2, 2, 0, 1]
// nums = [3, 1, 3]
// nums = [3, 1, 2, 2]
nums = [2, 2, 2, 0, 1]
nums = [1, 1, 1, 1, 1]
nums = [1, 2, 3, 4, 5]
nums = [1]
nums = [3, 4, 5, 1, 2, 2, 2]
nums = [2, 2, 2, 2, 2, 1, 2]
// nums = [10, 1, 10, 10, 10]
nums = [3, 1, 3]
nums = [1, 2, 1]
var ans = findMin(nums)
console.log(ans)