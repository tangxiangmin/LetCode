/**
 * Created by admin on 2017/4/9.
 */
var canConstruct = function(ransomNote, magazine) {
    // 起初理解错了，以为是包含子字符串，原来只要a的字符都在b中出现，且数量足够就可以
    for (var i = 0, ransomNoteLen = ransomNote.length; i < ransomNoteLen; ++i){
        var idx = magazine.indexOf(ransomNote[i]);
        if (!~idx){
        }
      
    }
};

// var a = "aa",
//     b = "aab";
// var a = "a",
//     b = "b";
var a = "fffbfg",
    b = "effjfggbffjdgbjjhhdegh";
console.log(canConstruct(a, b));