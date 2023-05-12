/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function (s) {
    var l = 0;
    var r = 0;
    var max = 0;
    for (var i = 0; i < s.length; ++i) {
        var ch = s[i]
        if (ch === "0") {
            l++;
        } else {
            r++;
            max = Math.max(max, Math.min(l, r) * 2);
            // 下一轮，重置
            if(s[i+1] === '0'){
                l = 0
                r = 0
            }
        }
    }
    return max;
};

var s = "01000111";
// s = "00111";
// s = "111";
// s = "001";
s = "0010"
// s = "10"
var ans = findTheLongestBalancedSubstring(s);
console.log(ans);
