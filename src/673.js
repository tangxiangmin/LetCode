/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
};

var nums = [1,3,5,4,7,6]
var res = findNumberOfLIS(nums) // 2 个，分别是 [1, 3, 4, 7] 和[1, 3, 5, 7]

// [1] // [1]
// [1,3] // [1, 3]
// [1,3,5] // [1,3,5]
// [1,3,5,4] // [1,3,5]
// [1,3,5,4,7] // [1,3,5,7]、[1,3,4,7] 
// 最后一个元素是所有