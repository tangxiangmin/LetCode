/**
 * Created by admin on 2017/4/30.
 */
// 找到某个数组中连续子数组中其元素和最大值的那个
// 最大和的数组必定以正数开始，以正数结尾
// 前面写的代码太戳了，参考discuss里面的动态规划重新实现
var maxSubArray = function (nums) {
    var tmp = [],
        len = nums.length;
    var max = tmp[0] = nums[0];

    for (var i = 1; i < len; ++i) {
        tmp[i] = nums[i] + (tmp[i - 1] > 0 ? tmp[i - 1] : 0);
        max = Math.max(max, tmp[i]);
    }

    return max;
};

// 对于第i个数字，定义dp[i]为以nums[i]结尾的最大和，他可以选择拼接前面的元素，也可以选择不拼接
// dp[i] = max(dp[i-1] + nums[i], nums[i]) => max(dp[i-1],0) + nums[i]
var maxSubArray = function (nums) {
    const dp = []
    const n = nums.length
    let ans = -Infinity
    for (let i = 0; i < n; ++i) {
        dp[i] = nums[i] + Math.max(i === 0 ? 0 : dp[i - 1], 0)
        ans = Math.max(ans, dp[i])
    }
    return ans
};

var test = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(test));