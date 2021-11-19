/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
    var len = s.length;
    var ans = 0;
    for (var i = 0; i <= len - 3; ++i) {
        var next = s.substr(i, 3);
        if (isGood(next)) {
            ans++;
        }
    }
    return ans

    function isGood(s) {
        var map = {};
        for (var ch of s) {
            if (map[ch]) return false;
            map[ch] = true;
        }
        return map;
    }
};

var s = "aababcabc"
var s = "aababcabc"
var ans = countGoodSubstrings(s)
console.log(ans)