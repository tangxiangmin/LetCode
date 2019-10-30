/**
 * @param {string} s
 * @return {number}
 */
// 思路：由于需要切割获取最大数量，则我们需要尽可能短地切割长度，使用a表示L出现的次数，b表示R出现的次数，在遍历时当a==b，则表示可以切割
var balancedStringSplit = function (s) {
    var a = 0
    var b = 0
    var ans = 0
    for (var i = 0; i < s.length; ++i) {
        var ch = s[i]
        ch === 'L' ? a++ : b++
        if (a === b) {
            ans++
            a = 0
            b = 0
        }
    }
    if (a === b && a > 0) {
        ans++
    }
    return ans
};