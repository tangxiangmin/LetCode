/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function (s, words) {
    var index = 0;
    for (var i = 0; i < words.length; ++i) {
        var word = words[i];
        for (var j = 0; j < word.length; ++j) {
            if (index >= s.length || s[index] !== word[j]) return false;
            index++;
        }
        if (index === s.length) return true;
    }
    return false;
};

var s = "iloveleetcode",
    words = ["i", "love", "leetcode", "apples"];

// var s = "a",
//     words = ["aa", "aaaa", "banana"];
var ans = isPrefixString(s, words);
console.log(ans);
