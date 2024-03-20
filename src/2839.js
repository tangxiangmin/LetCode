/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// 思路：字符串长度为4，因此选择的i只能是0和1
var canBeEqual = function (s1, s2) {
    for (let i = 0; i <= 1; ++i) {
        const ch = s1[i]
        if (ch !== s2[i]) {
            if (ch !== s2[i + 2]) {
                return false
            }
            if (s2[i] !== s1[i + 2]) {
                return false
            }
        } else if (s1[i + 2] !== s2[i + 2]) {
            return false
        }
    }
    return true
};

var s1 = "lpsc"
var s2 = "cslp"
var ans = canBeEqual(s1, s2)
console.log(ans)