/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
    var prev = s[0];
    var ans = 1;
    var l = 1;
    for (var i = 1; i < s.length; ++i) {
        var ch = s[i];
        if (ch === prev) {
            l++;
        } else {
            ans = Math.max(ans, l);
            prev = ch;
            l = 1;
        }
    }
    ans = Math.max(ans, l);
    return ans;
};

var s = "leetcode";
// s = "abbcccddddeeeeedcba";
s ="cc"
var ans = maxPower(s);
console.log(ans);
