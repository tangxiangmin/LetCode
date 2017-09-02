/**
 * Created by admin on 2017/9/2.
 */
// 合法的闭合标签
// 给定字符串只包括'(', ')', '{', '}', '[' and ']'，判断是否是成对合法的标签。
// 思路，当一个闭合标签内存在未闭合的标签则非法

var isValid = function(s) {
    function getCloseTag(tag) {
        switch (tag){
            case '(':
                return ')';
            case '[':
                return ']';
            case '{':
                return '}';
        }
    }
    var letStatck = [];
    for (var i = 0; i < s.length; ++i){
        let val = s[i];
        if (val == '(' || val == '[' || val == '{'){
            letStatck.push(val);
        }else {
            if (letStatck.length == 0){
                return false;
            }
            var top = letStatck[letStatck.length-1];
            var closeTag = getCloseTag(top);
            if (closeTag == s[i]){
                letStatck.pop();
            }else {
                return false;
            }
        }
    }
    return letStatck.length === 0;
};

// var str = "()]";
var str = "([)]";

console.log(isValid(str));