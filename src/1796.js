/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
    var first = "";
    var second = "";
    for (var ch of s) {
        if (/\d/.test(ch)) {
            if (!first) {
                first = ch;
            }
            if (ch > first) {
                second = first;
                first = ch;
            } else if (ch < first) {
                if (!second) {
                    second = ch;
                } else if (ch > second) {
                    second = ch;
                }
            }
        }
    }
    return second || -1;
};

var s = "dfa12321afd";
s = "abc1111";
var ans = secondHighest(s);
console.log(ans);
