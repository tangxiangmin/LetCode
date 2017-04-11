/**
 * Created by admin on 2017/4/11.
 */
// 找到整个字符串中第一个不重复字符的index，如果所有字符都有重复则返回-1
var firstUniqChar = function(s) {
    for (var i = 0, len = s.length; i < len; ++i){
        var letter =  s[i],
            idx = s.indexOf(letter);
        if(idx === s.lastIndexOf(letter)){
            return idx;
        }
    }
    return -1;
};

// var s = "leetcode";
var s = "loveleetcode";
console.log(firstUniqChar(s));