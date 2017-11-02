// 求最后一个单词的长度
// 如果不存在最后一个单词（以空格结尾）


var lengthOfLastWord = function (s) {
 
    return s.trim().split(" ").pop().length;
};

var s = "a";

console.log (lengthOfLastWord(s));