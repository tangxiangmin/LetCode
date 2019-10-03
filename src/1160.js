/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
    var map = {}
    for (var i = 0; i < chars.length; ++i) {
        var ch = chars[i]
        map[ch] = map[ch] ? map[ch] + 1 : 1
    }
    var ans = 0
    for (var i = 0; i < words.length; ++i) {
        var word = words[i]
        if (spell(word, Object.assign({}, map))) {
            ans += word.length
        }
    }
    return ans
    function spell(word, map) {
        for (var i = 0; i < word.length; ++i) {
            var ch = word[i]
            if (map[ch]) {
                map[ch]--
            } else {
                return false
            }
        }
        return true
    }
};