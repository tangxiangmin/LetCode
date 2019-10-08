/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
    var map = {}
    for (var i = 0; i < words.length; ++i) {
        var word = words[i]
        if (!map[word]) map[word] = 0;
        map[word]++
    }
    var ans = []
    for (var i = 0; i < k; ++i) {
        var max = -Infinity
        var word = ''
        for (var key in map) {
            var val = map[key]
            if (max < val || (max === val && word > key)) {
                max = val
                word = key
            }
        }
        delete map[word]
        ans.push(word)
    }
    return ans
};