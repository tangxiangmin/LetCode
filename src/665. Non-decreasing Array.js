// 给定一个数组，最多改变一位，判断是否满足非降序数组（即array[i] <= array[i + 1]）

// 思路：遍历数组，忽略第一个不满足条件的元素
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    var l = 0;
    var r = nums.length - 1;
    for (; l != r && nums[l] <= nums[l + 1]; l++);
    for (; l != r && nums[r - 1] <= nums[r]; r--);
    
    return r - l <= 1 && (l == 0 || nums[l - 1] <= nums[r] || r + 1 == nums.length || nums[l] <= nums[r + 1]);
};

var arr = [3, 4, 2, 3];
checkPossibility(arr);
