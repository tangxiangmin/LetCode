/**
 * @param {number} n
 * @return {number[]}
 */
var evenOddBit = function (n) {
    var chars = n.toString(2);
    var even = 0;
    var odd = 0;
    var len = chars.length;
    for (var i = 0; i < len; ++i) {
        var ch = chars[i];
        if (ch === "1") {
            if ((len - i + 1) % 2 === 0) {
                even++;
            } else {
                odd++;
            }
        }
    }
    return [even, odd];
};

var n = 17;
// n = 2;
var ans = evenOddBit(n);
console.log(ans);
