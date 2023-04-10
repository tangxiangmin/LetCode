/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
    var ans = [];
    var tmp = "";
    for (var i = 0; i < s.length; ++i) {
        tmp += s[i];
        if (tmp.length === k) {
            ans.push(tmp);
            tmp = "";
        }
    }
    if (tmp.length && tmp.length < k) {
        for (var i = tmp.length; i < k; ++i) {
            tmp += fill;
        }
        ans.push(tmp);
    }
    return ans;
};

var s = "abcdefghi",
    k = 3,
    fill = "x";

(s = "abcdefghij"), (k = 3), (fill = "x");
// s = "ctoyjrwtngqwt"
// k = 8
// fill = "n"

var ans = divideString(s, k, fill);
console.log(ans);
