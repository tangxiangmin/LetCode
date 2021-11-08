/**
 * @param {string} s
 * @return {number}
 */
// 不管是一个X还是三个X，都需要占用操作次数，按顺序修改就行了
var minimumMoves = function (s) {
    var len = s.length;
    var ans = 0;
    for (var i = 0; i < len; ++i) {
        var ch = s[i];
        if (ch === "X") {
            ans++;
            i += 2;
        }
    }
    return ans
};

var s = "XXOX"
var ans = minimumMoves(s)
console.log(ans)

