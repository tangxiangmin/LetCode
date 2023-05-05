/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function (num) {
    var chars = num
        .toString()
        .split("")
        .map((row) => Number(row));
    chars.sort((a, b) => a - b);
    var s1 = "";
    var s2 = "";
    for (var i = 0; i < chars.length; i += 2) {
        s1 += chars[i];
        if (i + 1 < chars.length) {
            s2 += chars[i + 1];
        }
    }
    return Number(s1) + Number(s2);
};

var num = 4325;
// num = 687
var ans = splitNum(num);
console.log(ans);
