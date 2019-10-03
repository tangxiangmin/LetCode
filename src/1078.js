/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
    var words = text.split(' ')
    var p_prev = words[0]
    var prev = words[1]

    var ans = []
    for (var i = 2; i < words.length; ++i) {
        var word = words[i]
        if (first === p_prev && second === prev) {
            ans.push(word)
        }

        p_prev = prev
        prev = word
    }
    return ans
};