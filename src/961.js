/**
 * @param {number[]} A
 * @return {number}
 */
// 思路：2N长度有N+1个元素，则某个元素重复了N次，则其他元素只出现一次
var repeatedNTimes = function (A) {
    var map = {}
    for (var i = 0; i < A.length; ++i) {
        var cur = A[i]
        if (!map[cur]) {
            map[cur] = true
        } else {
            return cur
        }
    }
};