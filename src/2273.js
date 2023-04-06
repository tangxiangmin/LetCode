/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function (words) {
    var ans = [];
    var prev = words[0];
    for (var i = 1; i < words.length; ++i) {
        if (!isSame(prev, words[i])) {
            ans.push(prev);
            prev = words[i];
        }
    }
    ans.push(prev);
    return ans;

    function isSame(w1, w2) {
        var m1 = getWordCharMap(w1);
        var m2 = getWordCharMap(w2);
        var keys = Object.keys(m1);
        if (keys.length !== Object.keys(m2).length) return false;
        return keys.every((key) => {
            return m1[key] === m2[key];
        });
    }

    function getWordCharMap(w) {
        var map = {};
        for (var ch of w) {
            if (!map[ch]) {
                map[ch] = 0;
            }
            map[ch]++;
        }
        return map;
    }
};

var words = ["abba", "baba", "bbaa", "cd", "cd"];
var ans = removeAnagrams(words);
console.log(ans);
