/**
 * @param {string[]} A
 * @return {number}
 */

// 思路：题意难道不是删除其余的降序列吗
var minDeletionSize = function (A) {
    var r = A.length
    if (!r) return 0
    var c = A[0].length

    var ans = 0
    for (var i = 0; i < c; ++i) {
        var prev
        for (var j = 0; j < r; ++j) {
            var s = A[j]
            // 如果存在降序，则表示该列需要删除
            if (prev && prev > s[i]) {
                ans++
                break
            }
            prev = s[i]
        }
        prev = null
    }
    return ans
};

var A = ["cba", "daf", "ghi"]
A = ["zyx", "wvu", "tsr"]
var res = minDeletionSize(A)
console.log(res)