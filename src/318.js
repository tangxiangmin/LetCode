/**
 * @param {string[]} words
 * @return {number}
 */
// 思路1 BF
var maxProduct = function (words) {
    var len = words.length;
    var ans = 0;
    for (var i = 0; i < len - 1; ++i) {
        for (var j = i + 1; j < len; ++j) {
            if (check(words[i], words[j])) {
                ans = Math.max(ans, words[i].length * words[j].length);
                
            }
        }
    }
    return ans;
    function check(w1, w2) {
        var m1 = {};
        for (var ch of w1) {
            m1[ch] = true;
        }
        for (var ch of w2) {
            if (m1[ch]) return false;
        }
        return true;
    }
};

var words = ["abcw", "baz", "foo", "bar", "xtfn", "abcdef"];
var ans = maxProduct(words);
console.log(ans);
