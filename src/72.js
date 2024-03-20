/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
// 动不了啊，也规划不起来
// 人生苦短，先看题解
// dp[i][j] 表示 A 的前 i 个字母到 B 的前 j 个字母之间的编辑距离。
// dp[0][j] = j // 表示从空串到j的操作次数，做j次添加即可
// dp[i][0] = i // 从i到空串的操作，做i次删除即可
// dp[i][j] => 
// 知道dp[i-1][j]，则再进行1次删除即可，删除A的第i个字符
// 知道dp[i][j-1]，则再进行1次添加即可，添加B的第j个字符
// 知道dp[i-1][j-1]，则进行替换操作，把A的第i个字符串替换成B的第j个字符，这里如果两个字符串相等，就不用替换了，省1次操作

var minDistance = function (word1, word2) {
    const m = word1.length
    const n = word2.length
    if (n * m == 0) {
        return n + m;
    }
    const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
    for (let i = 0; i < m + 1; ++i) {
        dp[i][0] = i
    }
    for (let j = 0; j < n + 1; ++j) {
        dp[0][j] = j
    }
    for (let i = 1; i < m + 1; ++i) {
        for (let j = 1; j < n + 1; ++j) {
            dp[i][j] = Math.min(dp[i - 1][j - 1] + (word1[i - 1] !== word2[j - 1] ? 1 : 0), dp[i - 1][j] + 1, dp[i][j - 1] + 1)
        }
    }
    return dp[m][n]
};
var word1 = "horse", word2 = "ros"
word1 = "pneumonoultramicroscopicsilicovolcanoconiosis", word2 = "ultramicroscopically"
var ans = minDistance(word1, word2)
console.log(ans)