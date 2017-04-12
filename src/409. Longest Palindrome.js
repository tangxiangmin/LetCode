/**
 * Created by admin on 2017/4/12.
 */

// 给定一个字符串，找到由这些字符能够组成的最大的回文字符串长度
// 思路是找到所有字符的最大偶数量，最后再判断是否+1（最中间的那个字符）
var longestPalindrome = function(s) {
    var tmp = {},
        len = s.length;
    for (var i = 0; i < len; ++i){
        var key = s[i];
        tmp[key] ? tmp[key]++ : tmp[key]=1;
    }
    var sum = 0;
    for(var key in tmp){
        var val = tmp[key];
        sum += val%2?(val-1):val;
    }
    if (sum != len) {
        sum++;
    }
    return sum;
};

var s = "abccccdd";
console.log(longestPalindrome(s));