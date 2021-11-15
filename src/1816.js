/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
    var len = s.length;
    var ans = "";
    for (var i = 0; i < len; ++i) {
        var ch = s[i];

        if (ch === " ") {
            k--;
        }
        if (k === 0) {
            return ans;
        }
        ans += ch;
    }
    return ans;
};
