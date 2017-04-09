/**
 * Created by admin on 2017/4/9.
 */
var reverseWords = function(s) {
    const separator = " ";
    let arr = s.split(separator);
    let res =  arr.map((val)=>{
        val = val.split("");
        return val.reverse().join("");
    });
    return res.join(separator);
};

var test = "Let's take LeetCode contest";
console.log(reverseWords(test));