/**
 * Created by admin on 2017/6/11.
 */
// 给定一个字符串逆转其中的元音字母
// 元音字母：aeiou

var reverseVowels = function(s) {
    var vowels = "AaEeIiOoUu";
    s = s.split("");

    var arr = s.filter(item=>{
        return ~vowels.indexOf(item);
    });

    let count = 0;
    for (var i = s.length - 1; i >= 0; --i){
        if (~vowels.indexOf(s[i])){
            s[i] = arr[count++];
        }
    }

    return s.join("");
};

var test = "hello";
console.log(reverseVowels(test));