/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
// 思路，找到较短的那个字符串，然后依次去除1..n-1个字符串后看在较长的字符串里面是否存在
var countSubstrings = function (s, t) {
    var m = s.length;
    var n = t.length;
    var ans = 0;
    for (var i = 0; i < m; ++i) {
        for (var j = 0; j < n; ++j) {
            var diff = 0;

            for (var k = 0; i + k < m && j + k < n; ++k) {
                diff += s[i + k] != t[j + k] ? 1 : 0;
                if (diff > 1) {
                    break;
                }
                if (diff == 1) {
                    ++ans;
                }
            }
        }
    }
    return ans
};
