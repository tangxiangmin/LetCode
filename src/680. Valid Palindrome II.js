// 给定一个字符串，最多可以删除一个字符，是否能够让其变成回文字符
// 思路：根据常规判断回文的思路，如果遇见第一次失败的情形尝试忽略该字符
// 问题：把JS的substr参数搞错了，尴尬
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {

    var len = s.length;

    function helper(s) {
        var len = s.length;
        for (var i = 0; i < len / 2; ++i){
            if (s[i] !== s[len-i-1]){
                return false;
            }
        }
        return true;
    }

    for (var i = 0; i < len; ++i){
        var end = len - i - 1; 
        if (s[i] != s[end]){
            let subLen = len - 2 * i - 1;
            return helper(s.substr(i, subLen)) || helper(s.substr(i + 1, subLen));
        }
    }

    return true;
};

var s = "eccer"
var res = validPalindrome(s);
console.log(res);