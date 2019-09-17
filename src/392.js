/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 思路：快慢指针
 */
var isSubsequence = function (s, t) {
    var slow = 0, fast = 0
    while (slow < s.length && fast < t.length) {
        if (t[fast] === s[slow]) {
            slow++
        }

        fast++
    }
    return slow === s.length
};

// 思路：动态规划，参考 https://leetcode-cn.com/problems/is-subsequence/solution/java-dp-by-zxy0917-5/
// 状态：dp[i][j]为s的从头开始到i的子字符串是否为t从头开始到j的子字符串的子序列
// 状态转移公式：
// 当char[i]==char[j]时，则字符i一定是j的子序列，如果0~i-1子字符串是0~j-1子字符串的子序列，则dp[i][j]=true，所以dp[i][j] = dp[i-1][j-1]；
// 当char[i]!=char[i]时，即判断当前0~i子字符串是否是0~j-1的子字符串的子序列，即dp[i][j] = dp[i][j - 1]。如ab，eabc，虽然s的最后一个字符和t中最后一个字符不相等，但是因为ab是eab的子序列，所以ab也是eabc的子序列
// 初始化：空字符串一定是t的子字符串的子序列，所以dp[0][j]=true
// 结果：返回dp[sLen][tLen]

var isSubsequence = function (s, t) {
    var sLen = s.length
    var tLen = t.length

    if (sLen > tLen) return false;
    if (sLen == 0) return true;

    var dp = new Array(sLen)

    for (var i = 0; i < tLen; ++i) {
        dp[i] = new Array(i)
    }
    for (var i = 0; i < tLen; ++i) {
        dp[0][i] = true
    }

    for (var i = 1; i <= sLen; i++) {
        for (var j = 1; j <= tLen; j++) {
            if (s[i - 1] == t[j - 1]) {
                // 字符相等
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                // 字符不相等，从末尾缩减t
                dp[i][j] = dp[i][j - 1];
            }
        }
    }
    return dp[sLen][tLen];
}

var s = "abc", t = "ahbgdc"
// s = "axc", t = "ahbgdc"
var res = isSubsequence(s, t)
console.log(res)
