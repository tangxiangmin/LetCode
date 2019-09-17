/**
 * @param {string} s
 * @return {number}
 * 
 */

// 译码只能为下面两种情况
// 一位数 1-9
// 二位数 1 + 1-9 和 2 + 1-6

// 动态规划通用推算公式
// dp[i]表示 str[0...i]的译码方法总数
// 如果s[i] === '0'， 如果s[i-1]为'1'或'2'，则dp[i] === dp[i-2]，否则return 0
// 如果s[i-1] === '1'，则dp[i] = dp[i-1](解释：s[i-1]与s[i]分开译码) + dp[i-2](解释：最后两位合并译码)
// 如果s[i-1] === '2'，且'1'<=s[i]<='6'，则dp[i] = dp[i-1] + dp[i-2]

var numDecodings = function (s) {
    var map = {}
    var start = 'A'.charCodeAt(0)
    for (var i = 1; i <= 26; ++i) {
        map[i] = String.fromCharCode(start + i - 1)
    }

    if (s.length <= 1) {
        return map[s[0]] ? 1 : 0
    }
    if (s[0] === '0') {
        return 0
    }

    // 由于只使用了memo[i-1]和memo[i-1]，因此还可以使用两个变量将空间复杂度将为O(1)
    var memo = {
        // [s.length]: combine
        '-1': 1,
        '0': 1
    }

    for (var i = 0; i <= s.length; ++i) {
        var cur = s[i]
        var prev = s[i - 1]
        if (cur === '0') {
            if (prev === '1' || prev === '2') {
                memo[i + 1] = memo[i - 1]
            } else {
                return 0
            }
        } else if ((prev === '2' && cur <= '6') || (prev === '1' && cur <= '9')) {
            memo[i + 1] = memo[i] + memo[i - 1]
        } else {
            memo[i + 1] = memo[i]
        }
    }
    return memo[s.length]
};

var s = "12"
// s = "67"
// s = '10'
// s = "012" // 0
// s = '100' // 0
// s = "2267"
var res = numDecodings(s)
console.log(res)

// s = "1" // [1]
// s = "12" // [1,2], [12]
// s = "123" // [1,2,3], [12,3], [1, 23]
// s = "127" // [1,2,7], [12,7]

// s = "226" // [2,26], [22,6], [2,2,6]
// s = "2267" // [2,26,7], [22,6,7], [2,2,6,7]
// s = "2263" // [2,26,3], [22,6,3], [2,2,6,3]

// s = "232" // [23,2], [2,3,6]
// s = "2324" // [23,2,4], [2,3,2,4], [23,24]

// s = "211" // [21,1], [2,11], [2,1,1]
// s = "2113" // [21,1,3], [2,11,,3], [2,1,1,3], [21,13]
