/**
 * Created by admin on 2017/6/13.
 */
// 求一个字符串中的单词数量
    // 思路：用JS处理字符串简直是作弊，还是老老实实遍历吧
var countSegments = function(s) {
    var len = s.length,
        count = 0,
        isWord = false;

    for (var i = 0; i < len; ++i) {
        if(s[i] !== " "){
            isWord = true;
        }else if (isWord){
            count++;
            isWord = false;
        }
    }

    if (isWord){
        count++;
    }

    return count;
};

var test = "Hello, my name     is John";
console.log(countSegments(test));