/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
    var left = s[0];
    for (var i = 1; i < s.length; ++i) {
        var cur = left[left.length - 1];
        var next = s[i];

        if (isSame(cur, next)) {
            left = left.substr(0, left.length - 1);
            if (left === "") {
                left = i === s.length - 1 ? "" : s[++i];
            }
        } else {
            left += next;
        }
    }
    return left;

    function isSame(a, b) {
        return Math.abs(a.charCodeAt(0) - b.charCodeAt(0)) === 32;
    }
};

var s = "leEeetcode";
s = "abBAcC";
var ans = makeGood(s);

console.log(ans);
