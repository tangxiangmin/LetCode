/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
    var dp = []
    dp[1] = 1
    dp[2] = 1
    for (var i = 3; i <= n; ++i) {
        var max = 0
        for (var j = 1; j <= i - 1; ++j) {
            var ans = Math.max(dp[j], j) * Math.max(dp[i - j], i - j)
            max = Math.max(max, ans)
        }
        dp[i] = max
    }
    return dp[n]
};

// 定义状态：
// dp[2] = (1+1) 1*1 = 1
// dp[3] = max((1+2) 1*2 = 2, (1+1+1) = 1)
// dp[10] = 6+4 = 3+3+4 

// 对于给定的n = i + j
// dp[n] = dp[i, j]= max(dp[i], i) * max(dp[j], j)

// dp[10] = max(dp[5, 5], dp[6,4], dp[7,3], dp[8,2], dp[9,1])

var n = 10
var res = integerBreak(n)
console.log(res)