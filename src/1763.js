/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function (s) {
    var max = 0;
    var ans = "";
    for (var i = 0; i < s.length - 1; ++i) {
        for (var j = i + 1; j < s.length; ++j) {
            var sub = s.substring(i, j+1);
            if (check(sub) && sub.length > max) {
                max = sub.length;
                ans = sub;
            }
        }
    }
    return ans;
    function check(s) {
        var lowerCase = [];
        var upperCase = [];
        for (var ch of s) {
            var code = ch.charCodeAt(0);
            if (code >= 97) {
                // 小写
                lowerCase[code - 97] = true;
            } else {
                upperCase[code - 65] = true;
            }
        }
        for (var i = 0; i < 26; ++i) {
            if (lowerCase[i] !== upperCase[i]) return false;
        }
        return true;
    }
};

var s = "YazaAay" 
s = "Bb"
var ans = longestNiceSubstring(s)
console.log(ans)