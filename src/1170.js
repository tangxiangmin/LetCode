/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function (queries, words) {
    var wordsMap = words.map(f)
    var ans = []
    for (var i = 0; i < queries.length; ++i) {
        var num = f(queries[i])
        var count = 0
        for (var j = 0; j < wordsMap.length; ++j) {
            if (wordsMap[j] > num) {
                count++
            }
        }
        ans.push(count)
    }
    return ans

    // 找到s中最小字符出现的频率
    function f(s) {
        var arr = []
        for (var i = 0; i < s.length; ++i) {
            var idx = s.charCodeAt(i) - 97
            if (!arr[idx]) {
                arr[idx] = 0
            }
            arr[idx]++
        }
        for (var i = 0; i < arr.length; ++i) {
            if (arr[i] > 0) {
                return arr[i]
            }
        }
    }
};
var queries = ["bbb", "cc"], words = ["a", "aa", "aaa", "aaaa"]
var res = numSmallerByFrequency(queries, words)
console.log(res)