/**
 * @param {number[]} nums
 * @return {number}
 */
// 思路：求子数组最大值，
// 假设dp[i][j]表示从i到j组成的子数组之和，则dp[i][j] = arr[i] + arr[j] + dp[i+1][j-1]

// dp[i]表示索引值为i处子数组之和最大值

// 思路1： BF
var maxSubArray = function (nums) {
    var len = nums.length;
    var ans = -Infinity;
    for (var i = 0; i < len; ++i) {
        var sum = 0;
        for (var j = i; j < len; ++j) {
            sum += nums[j]; // 求所有子数组之和
            if (ans < sum) {
                ans = sum;
            }
        }
    }
    return ans;
};
// 思路2：在暴力解法下面，有很多子数组被重复计算，比如[-2, 1, -3, 4]就包含了[1,-3]的子数组
// 换个思路，一个最大和的子数组，其左右两个元素肯定是正数，从头开始遍历，则
// dp[i]表示第i个索引值时
// var nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// dp[0] = -2
// dp[1] = max(nums[0:1], nums[1])
// dp[3] = max(nums[1:3], nums[3]) = 4
// dp[5] = max(nums[5], nums[3:5]) = 5
// dp[6] = max(nums[6], nums[3:6]) = 6
// dp[8] = max(nums[8], nums[3:8]) = 5
var maxSubArray = function (nums) {
    var len = nums.length;
    var dp = [nums[0]];
    var max = dp[0];
    for (var i = 1; i < len; ++i) {
        dp[i] = Math.max(nums[i], nums[i] + dp[i - 1]);
        max = Math.max(dp[i], max);
    }
    return max
};
var nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
var res = maxSubArray(nums);
console.log(res);
