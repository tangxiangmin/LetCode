/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    var len = nums.length
    if (len <= 1) {
        return 1
    }

    var dp = [1]
    for (var i = 1; i < len; ++i) {
        dp[i] = 1
        for (var j = 0; j < i; ++j) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    return Math.max(...dp)
};
// 定义状态：dp(i) 表示以第 i 个数字为结尾的最长上升子序列的长度, 则nums[i]必选
// 状态转移方程：遍历到索引是 i 的数的时候，我们应该把索引是 [0, ... ,i - 1] 的 LIS 都看一遍，如果当前的数 nums[i] 大于之前的某个数，那么 nums[i] 就可以接在这个数后面形成一个更长的 LIS 。把前面的 i 个数都看了， LIS[i] 就是它们的最大值加 $1$。即比当前数要小的那些里头，找最大的，然后加 $1$ 。
// 状态转移方程即：dp(i) = max( 1 + dp(j) if j < i and nums[i] > nums[j])

var nums = [10, 9, 2, 5, 3, 7, 101, 18] 
//对应的dp表为 [1, 1, 1, 2, 2, 3, 4, 4]
var res = lengthOfLIS(nums)
console.log(res)
