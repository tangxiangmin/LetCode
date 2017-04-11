/**
 * Created by admin on 2017/4/11.
 */

// 判断两个字符串的组成字符是否相同（包括字符数量）
// 第一次又理解错了，以为是颠倒字符串


var isAnagram = function(s, t) {
    return s.split("").sort().join("") === t.split("").sort().join("");
};

var s = "anagram",
    t = "nagaram";
console.log(isAnagram(s, t));
