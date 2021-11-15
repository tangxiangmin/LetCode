/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
    var ans = "";
    for (var i = 0; i < s.length; ++i) {
        var ch = s[i];
        if (i % 2) {
            ans += shift(s[i - 1], parseInt(ch));
        } else {
            ans += ch;
        }
    }
    return ans
    function shift(ch, x) {
        return String.fromCharCode(ch.charCodeAt(0) + x);
    }
};

var s = "a1c1e1"
s = "a1b2c3d4e"
var ans = replaceDigits(s)
console.log(ans)