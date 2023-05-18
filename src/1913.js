/**
 * @param {number[]} nums
 * @return {number}
 */
// 思路，前面足够大，后面足够小
var maxProductDifference = function (nums) {
    nums.sort((a, b) => a - b);
    var len = nums.length;
    return nums[len - 1] * nums[len - 2] - nums[0] * nums[1];
};

var nums = [5, 6, 2, 7, 4];
var ans = maxProductDifference(nums);
console.log(ans);
