/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 思路：从下向上的DP
var runningSum = function(nums) {
    var ans = []
    var sum = 0
    for(var i = 0; i < nums.length; ++i){
        sum += nums[i]
        ans[i] = sum
    }
    return ans
};