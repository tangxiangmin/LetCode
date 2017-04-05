/**
 * https://leetcode.com/problems/reverse-string/#/description
 */
var reverseString = function(str) {
    // str = str.split("").reverse().join("");
    // return str;

    var res = "";
    for (var i = str.length - 1; i >= 0; --i){
        res += str[i];
    }
    return res;
};