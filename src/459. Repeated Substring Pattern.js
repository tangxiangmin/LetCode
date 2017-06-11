/**
 * Created by admin on 2017/6/11.
 */
// 给定一个非空字符串，检测是否可由其子字符串复制几次获得
// 思路：用正则真的不算作弊嘛
var repeatedSubstringPattern = function(s) {
    var re = /^(\w+?)\1+$/;

    return re.exec(s) && re.exec(s)[1] !== s || false;
};

var test = "abcabcabcabc";

console.log(repeatedSubstringPattern(test));