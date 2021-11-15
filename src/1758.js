/**
 * @param {string} s
 * @return {number}
 */
// 思路，只有首位为1和为0两种情况
var minOperations = function (s) {
    var len = s.length;

    var s1 = 0; // 首位为1
    var s2 = 0; // 首位为0
    for (var i = 0; i < len; ++i) {
        var ch = s[i];
        if (i % 2 === 0) {
            if (ch === "0") {
                s1++;
            } else {
                s2++;
            }
        } else {
            if (ch === "1") {
                s1++;
            } else {
                s2++;
            }
        }
    }
    return Math.min(s1, s2);
};
var s = "0100"
var ans = minOperations(s)
console.log(ans)