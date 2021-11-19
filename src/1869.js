/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s) {
    var max0 = 0;
    var max1 = 0;
    var count0 = 0;
    var count1 = 0;
    var token = s[0];

    for (var ch of s) {
        if (ch !== token) {
            // 重置
            count0 = 0;
            count1 = 0;
            token = ch;
        }

        if (token === "0") {
            count0++;
            max0 = Math.max(count0, max0);
        } else {
            count1++;
            max1 = Math.max(count1, max1);
        }
    }

    return max1 > max0;
};

var s = "1101";
// s = "111000";
s = "110100010";
var ans = checkZeroOnes(s);
console.log(ans);
