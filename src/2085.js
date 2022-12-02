/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
    if (words1.length > words2.length) {
        var tmp = words1;
        words1 = words2;
        words2 = tmp;
    }
    var map1 = clacWord(words1);
    var map2 = clacWord(words2);
    var ans = 0;
    for (var i = 0; i < words1.length; ++i) {
        var word = words1[i];
        if (map1[word] === 1 && map2[word] === 1) {
            ans++;
        }
    }

    return ans;

    function clacWord(words) {
        return words.reduce((acc, word) => {
            if (!acc[word]) {
                acc[word] = 0;
            }
            acc[word]++;
            return acc;
        }, {});
    }
};

var words1 = ["leetcode", "is", "amazing", "as", "is"],
    words2 = ["amazing", "leetcode", "is"];
(words1 = ["b", "bb", "bbb"]), (words2 = ["a", "aa", "aaa"]);
(words1 = ["a", "ab"]), (words2 = ["a", "a", "a", "ab"]);

var ans = countWords(words1, words2);
console.log(ans);
