/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s) {
    var lb = s.indexOf("b");
    var ra = s.lastIndexOf("a");
    return lb === -1 || ra === -1 || lb > ra;
};
// 思路2： 直接判断是否有 ba 子字符串
var checkString = function (s) {
    return s.includes("ba");
};

var s = "aaabbb";
// s = "abab";
// s = "aaba";
var ans = checkString(s);
console.log(ans);
