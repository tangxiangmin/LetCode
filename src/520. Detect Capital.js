/**
 * Created by admin on 2017/4/6.
 */
var detectCapitalUse = function(word) {
    var charCode_a = 97;
    var firstLetter = word.charCodeAt(0);

    // 全大写
    if (firstLetter < charCode_a && word === word.toUpperCase()){
        return true;
    }

    // 全小写
    if(firstLetter >= charCode_a && word === word.toLowerCase()) {
        return true;
    }

    // 大小写混合
    for (var i = 1, len = word.length; i < len; ++i){
        var letter = word.charCodeAt(i);
        if (letter < charCode_a){
            return false;
        }
    }

    // 最后的情况为首字母大写
    return true;
};

// var test = "USA";
var test = "alaG";
// var test = "letcode";
console.log(detectCapitalUse(test));