/**
 * https://leetcode.com/problems/reverse-string/#/description
 */
var reverseString = function (str) {
    // str = str.split("").reverse().join("");
    // return str;

    var res = "";
    for (var i = str.length - 1; i >= 0; --i) {
        res += str[i];
    }
    return res;
};
// 题目要求原地修改，使用双指针
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    var l = 0;
    var r = s.length - 1;
    while (l < r) {
        var tmp = s[l];
        s[l] = s[r];
        s[r] = tmp;
        l++;
        r--;
    }
    return s
};
