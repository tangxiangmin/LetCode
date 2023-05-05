/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function (words) {
    var maps = words.map(calc);

    var len = maps.length;
    var ans = 0;
    for (var i = 0; i < len - 1; ++i) {
        for (var j = i + 1; j < len; ++j) {
            if (same(maps[i], maps[j])) {
                ans++;
            }
        }
    }
    return ans;

    function calc(word) {
        var map = {};
        for (var ch of word) {
            map[ch] = true;
        }
        return Object.keys(map).sort();
    }

    function same(m1, m2) {
        if (m1.length !== m2.length) return false;
        for (var i = 0; i < m1.length; ++i) {
            if (m1[i] !== m2[i]) return false;
        }
        return true;
    }
};

var words = ["aba", "aabb", "abcd", "bac", "aabc"];
var ans = similarPairs(words);
console.log(ans);
