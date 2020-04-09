/**
 * @param {number} n
 * @return {number}
 */
// 注意次数不是为了最快猜中（不是二分），而是为了找到猜中的数字之和最小

// 状态：dp[i][j]表示从[i,j]中猜出正确数字所需要的最少花费金额.(dp[i][i] = 0)
// 假设在范围[i,j]中选择x, 则选择x的最少花费金额为: max(dp[i][x-1], dp[x+1][j]) + x
// 用max的原因是我们要计算最坏反馈情况下的最少花费金额(选了x之后, 正确数字落在花费更高的那侧)

// 初始化为(n+2)*(n+2)数组的原因: 处理边界情况更加容易, 例如对于求解dp[1][n]时x如果等于1, 需要考虑dp[0][1](0不可能出现, dp[0][n]为0)
// 而当x等于n时, 需要考虑dp[n+1][n+1](n+1也不可能出现, dp[n+1][n+1]为0)

// 递推式dp[i][j] = min(max(dp[i][x-1], dp[x+1][j]) + x), x~[i:j], 可以画出矩阵图协助理解, 可以发现
// dp[i][x-1]始终在dp[i][j]的左部, dp[x+1][j]始终在dp[i][j]的下部, 所以更新dp矩阵时i的次序应当遵循bottom到top的规则, j则相反, 由于i肯定小于等于j, 所以我们只需要遍历更新矩阵的一半即可(下半矩阵)
var getMoneyAmount = function (n) {
    var dp = []
    for (var i = 0; i < n + 2; ++i) {
        dp[i] = []
        for (var j = 0; j < n + 2; ++j) {
            dp[i][j] = undefined
        }
    }
    for (var i = n; i >= 1; --i) {
        for (var j = i; j <= n; ++j) {
            if (i === j) {
                dp[i][j] = 0
            } else {
                dp[i][j] = Infinity
            
                for (var x = i; x <= j; ++x) {
                    var max = Math.max(dp[i][x - 1] || 0, dp[x + 1][j] || 0) + x
                    dp[i][j] = Math.min(dp[i][j], max);
                }
            }
        }
    }
    return dp[1][n]
};

var n = 10 //  5 + 7 + 9 = 21
n = 3
var res = getMoneyAmount(n)
console.log(res)
