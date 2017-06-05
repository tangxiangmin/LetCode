/**
 * Created by admin on 2017/5/20.
 */
// 检测一个字符串是否可以由其子字符串重复数次组成
var repeatedSubstringPattern = function(s) {
    var re = /^([a-z]+)?$/g;

    var res = null;
    while(res = re.exec(s)){
        console.log(res);
    }

    return re.test(s);
};

var test = "ababa";
console.log(repeatedSubstringPattern(test));