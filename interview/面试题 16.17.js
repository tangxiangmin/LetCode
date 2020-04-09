/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var len = nums.length
    var dp = [nums[0]]
    var max = dp[0];
    for(var i = 1 ; i < len; ++i){
        dp[i] = Math.max(nums[i], dp[i-1] + nums[i])
        max = Math.max(max, dp[i])
    }
    return max
};