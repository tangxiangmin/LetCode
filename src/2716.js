/**
 * @param {string} s
 * @return {number}
 */
// 使用hash，让最后每个字符只出现1次
var minimizedStringLength = function (s) {
    var map = {}
    let ans = 0
    for (const ch of s) {
        if (!map[ch]) {
            map[ch] = true
            ans++
        }
    }
    return ans
};
var minimizedStringLength = function (s) {
    return new Set(s).size
}