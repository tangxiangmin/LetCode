/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
    var pair = false;
    var ans = 0;
    for (var ch of s) {
        if (ch == "|") {
            pair = !pair;
        }
        if (!pair && ch === "*") {
            ans++;
        }
    }
    return ans
};

var s = "l|*e*et|c**o|*de|";
s = "iamprogrammer"
s = "yo|uar|e**|b|e***au|tifu|l"
var ans = countAsterisks(s)
console.log(ans)
