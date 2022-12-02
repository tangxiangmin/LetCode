/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */

var checkAlmostEquivalent = function (word1, word2) {
    var len = 26;

    var arr1 = clacChars(word1);
    var arr2 = clacChars(word2);

    for (var i = 0; i < len; ++i) {
        if (Math.abs(arr1[i] - arr2[i]) > 3) {
            return false;
        }
    }

    return true;

    function clacChars(word) {
        var start = "a".charCodeAt(0);
        var ans = new Array(len).fill(0);

        for (var ch of word) {
            var idx = ch.charCodeAt(0) - start;
            ans[idx]++;
        }
        return ans;
    }
};

var word1 = "aaaa",
    word2 = "bccb";
    word1 = "abcdeef", word2 = "abaaacc"
    word1 = "cccddabba", word2 = "babababab"
var ans = checkAlmostEquivalent(word1, word2);
console.log(ans);
