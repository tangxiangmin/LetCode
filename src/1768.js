    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    var mergeAlternately = function (word1, word2) {
        var ans = "";
        var len = Math.min(word1.length, word2.length);
        var i = 0;
        for (; i < len; ++i) {
            ans += word1[i];
            ans += word2[i];
        }
        var word = word1.length < word2.length ? word2 : word1;
        ans += word.substr(i);
        return ans;
    };

var word1 = "ab",
    word2 = "pqrs";
var ans = mergeAlternately(word1, word2);
console.log(ans);
