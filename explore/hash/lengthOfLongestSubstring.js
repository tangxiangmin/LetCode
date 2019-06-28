/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var r = 0;
    var cur = "";
    var max = cur;
    while (r < s.length) {
        var c = s[r];
        r++;
        var idx = cur.indexOf(c);
        if (idx === -1) {
            cur += c;
        } else {
            if (max.length < cur.length) {
                max = cur;
            }
            cur = cur.substr(idx + 1) + c;
        }
    }
    if (max.length < cur.length) {
        max = cur;
    }
    return max.length;
};
var str = "abcabcbb";
// str = "bbbbb";
// str = "pwwkew";
str = "aab";

var res = lengthOfLongestSubstring(str);
console.log(res);
