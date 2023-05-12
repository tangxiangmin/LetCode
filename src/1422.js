/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
    var max1 = 0;
    for (var i = 0; i < s.length; ++i) {
        if (s[i] === "1") max1++;
    }

    var l = 0;
    var r = max1;
    var ans = 0;
    for (var i = 0; i < s.length - 1; ++i) {
        var ch = s[i];
        if (ch === "0") {
            l++;
        } else {
            r--;
        }
        ans = Math.max(l + r, ans);
    }
    return ans;
};

var s = "011101";
s = "00111";
// s = "1111";
// s = "00";
// s ="1011011"
var ans = maxScore(s);
console.log(ans);
