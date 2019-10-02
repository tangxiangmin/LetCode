/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
    var dp = []
    dp[0] = 1
    dp[1] = 10
    for (var i = 2; i <= n; ++i) {
        dp[i] = dp[i - 1] + (dp[i - 1] - dp[i - 2]) * (10 - (i - 1))
    }
    return dp[n]
};

// dp[i]表示i位数中不包括重复数字的个数
// dp[i] = dp[i-1] + (dp[i-1]-dp[i-2])*(10-(i-1)),其中
// dp[i-1] 表示小于等于i-1位满足题意的数量，
// dp[i-1]-dp[i-2]为等于i-1位长度中满足题意的数量，再后面添加一个不重复的数就凑成i位长度，

var n = 2
var res = countNumbersWithUniqueDigits(n)
console.log(res)
// 111,112