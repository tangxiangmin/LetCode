/**
 * Created by admin on 2017/4/9.
 */
var canConstruct = function(ransomNote, magazine) {

    // 起初理解错了，以为是包含子字符串，原来只要a的字符都在b中出现，且数量足够就可以
    var letterObj = {};
    for (var i = 0, len = magazine.length; i < len; ++i){
        var key = magazine[i];
        if (key in letterObj){
            letterObj[key]++;
        }else {
            letterObj[key] = 1;
        }
    }

    for (var i = 0, len = ransomNote.length; i < len; ++i){
        var key = ransomNote[i];
        if (!letterObj[key] || letterObj[key] < 0){
            return false;
        }
        if (key in letterObj){
            letterObj[key]--;
        }
    }
    return true;
};

// var a = "aa",
//     b = "aab";
// var a = "a",
//     b = "b";
var a = "fffbfg",
    b = "effjfggbffjdgbjjhhdegh";
console.log(canConstruct(a, b));