/**
 * @param {number[]} nums
 * @return {number}
 */
// (nums[i]-1)*(nums[j]-1) 最大
// 思路，实际上是求前两个最大值，排个序
var maxProduct = function(nums) {
    nums.sort((a,b)=>b-a)
    return (nums[0] - 1) *( nums[1] - 1)
};