/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// 思路：相当于这两个字符串完全相等，或者只有两个位置的字符是颠倒的
var areAlmostEqual = function (s1, s2) {
    var len = s1.length;
    var tokens1 = [];
    var tokens2 = [];
    for (var i = 0; i < len; ++i) {
        if (s1[i] !== s2[i]) {
            tokens1.push(s1[i]);
            tokens2.push(s2[i]);
            if (tokens1.length > 2) return false;
        }
    }

    if (!tokens1.length) return true;
    return tokens1[1] === tokens2[0] && tokens1[0] === tokens2[1];
};

var s1 = "bank",
    s2 = "kanb";

    s1 = "attack", s2 = "defend"
var ans = areAlmostEqual(s1, s2);
console.log(ans);
