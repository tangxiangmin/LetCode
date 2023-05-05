/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function (words, left, right) {
    var ans = 0;
    var chars = ["a", "e", "i", "o", "u"];
    for (var i = left; i <= right; ++i) {
        var word = words[i];
        if (chars.includes(word[0]) && chars.includes(word[word.length - 1])) {
            ans++;
        }
    }
    return ans;
};

var words = ["are", "amy", "u"],
    left = 0,
    right = 2;
var ans = vowelStrings(words, left, right);
console.log(ans);
