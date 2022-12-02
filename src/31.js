/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 思路，找到升序的位置
var nextPermutation = function(nums) {
    var len = nums.length
    for(var i = 0; i < len; ++i){
        var cur = nums[i]
        var next = nums[i+1]
    }
};

var nums = [12,2,3]
nums = [21,1,3]
var ans = nextPermutation(nums)
console.log(ans)