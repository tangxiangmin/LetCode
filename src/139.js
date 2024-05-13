/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    var memo = {}
    return step(s, wordDict)
    function step(s, wordDict) {
        if (typeof memo[s] !== 'undefined') {
            return memo[s]
        }

        if (!s) {
            return true
        }
        for (var i = 0; i < wordDict.length; ++i) {
            var word = wordDict[i]
            var idx = s.indexOf(word)
            if (idx === -1) {
                continue
            }
            var s1 = s.slice(0, idx)
            var s2 = s.slice(idx + word.length)
            var flag = true

            if (s1) {
                memo[s1] = step(s1, wordDict)
                flag = flag && memo[s1]
            }
            if (s2) {
                memo[s2] = step(s2, wordDict)
                flag = flag && memo[s2]
            }
            if (flag) {
                return true
            }
        }
        return false
    }
};

// s[0~i-1][i][i+1 ~ -1]其中[i]表示在字典中的某个单词
// 则问题转换为子问题：求s[0~i-1]和s[i+1 ~ -1]能够用字典表示

var wordBreak = function (s, wordDict) {
    const n = s.length;
    const wordDictSet = new Set(wordDict);
    const dp = new Array(n + 1).fill(false);
    dp[0] = true;
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDictSet.has(s.substr(j, i - j))) {
                dp[i] = true;
                break;
            }
        }
        console.log('===')
    }
    return dp[n];
}

var wordBreak = function (s, wordDict) {
    const map = {}
    for (const word of wordDict) {
        map[word] = 1
    }
    const n = s.length
    const dp = new Array(n + 1).fill(false)
    dp[0] = true

    for (let i = 1; i <= n; ++i) {
        if (!dp[i - 1]) continue
        for (const word of wordDict) {
            const next = s.slice(i - 1, i - 1 + word.length)
            if (next === word) {
                dp[i - 1 + word.length] = true
            }
        }
    }
    return dp[n]
}

var s = "leetcode", wordDict = ["leet", "code"]
// s = "applepenapple", wordDict = ["apple", "pen"]

// s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// s = "cars", wordDict = ["car", "ca", "rs"]

var res = wordBreak(s, wordDict)
console.log(res)