/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} prices
 * @return {number}
 */
// 思路：dp，使用数组dp[i][j]表示 切分i*j大小的木块时最大的优惠，面对一块大小为i*j的木块时，有不切割，垂直切割、上下切割三种方式
// 他自己的价格 dp[i][j] （如果给定的prices里面不存在，则为0）
// 垂直切割，左边为宽度k，右边宽度j-k，价值为dp[i][k]+dp[i][j-k]
// 水平切割，上面高度为k，下面高度为i-k，价值为dp[k][j] + dp[i-k][j]
// 最大优惠等于三个价格的最大值
// 最后结果则为dp[m][n]
var sellingWood = function (m, n, prices) {
    const pr = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
    for (const price of prices) {
        const [i, j, p] = price
        pr[i][j] = p
    }

    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
    for (let i = 1; i <= m; ++i) {
        for (let j = 1; j <= n; ++j) {
            dp[i][j] = pr[i][j];

            for (let k = 1; k < j; k++) {
                // 垂直切割
                dp[i][j] = Math.max(dp[i][j], dp[i][k] + dp[i][j - k])
            }
            for (let k = 1; k < i; k++) {
                // 水平切割
                dp[i][j] = Math.max(dp[i][j], dp[k][j] + dp[i - k][j])
            }
        }
    }
    return dp[m][n]
};

var m = 3, n = 5, prices = [[1, 4, 2], [2, 2, 7], [2, 1, 3]]
var ans = sellingWood(m, n, prices)
console.log(ans)