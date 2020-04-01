/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
// 辗转相除法
var gcdOfStrings = function(str1, str2) {
    function gcd(a, b) {
        return b == 0 ? a : gcd(b, a % b);
    }
    if (str1 + str2 != str2 + str1) return "";
    return str1.substr(0, gcd(str1.length, str2.length));
};


var str1 = "ABABAB",
    str2 = "ABAB";

var res = gcdOfStrings(str1, str2);
console.log(res)
