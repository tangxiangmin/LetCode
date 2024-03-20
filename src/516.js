/**
 * @param {string} s
 * @return {number}
 */
// dp[i][j]作为s[i...j]范围内的最长回文子序列
// dp[i][i] = 1
// 如果s[i] == s[j]则 dp[i][j] = dp[i+1][j-1] + 2
// 如果s[i] !== s[j] 则dp[i][j] = max(dp[i+1][j] ,dp[i][j-1])
var longestPalindromeSubseq = function (s) {
    const n = s.length
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(0))

    for (let i = 0; i < n; ++i) {
        dp[i][i] = 1
    }

    for (let i = n - 1; i >= 0; --i) {
        for (let j = i + 1; j < n; ++j) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j])
            }
        }
    }
    // console.log(JSON.stringify(dp))
    return dp[0][n - 1]
};

var s = "bbbab"
var ans = longestPalindromeSubseq(s)
console.log(ans)