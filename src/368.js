/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
    nums.sort((a, b) => a - b)

    var dp = []
    var len = nums.length
    var ans = []
    for (var i = 0; i < len; ++i) {
        var cur = nums[i]
        dp[i] = [cur]
        for (var j = i - 1; j >= 0; --j) {
            var arr = dp[j]
            var last = arr[arr.length - 1]
            if (cur % last === 0 && dp[i].length <= arr.length) {
                dp[i] = arr.slice()
                dp[i].push(cur)
            }
        }
        if (dp[i].length > ans.length) {
            ans = dp[i]
        }
    }
    // console.log(dp)
    return ans
};

var nums = [1, 2, 3]
nums = [1, 2, 4, 8]
// nums = [4, 8, 10, 240]
var res = largestDivisibleSubset(nums)
console.log(res)

// 首先对nums进行升序排序
// 状态dp[i]表示位置i的元素组成的最长整除子集
// dp[i] = dp[j].push(j) if(nums[i]%j === 0 && dp[i].length <= dp[j].length)