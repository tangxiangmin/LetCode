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

// 思路：使用一个栈，然后反向拼接
var reverseWords = function (s) {
    var stack = s.split("");

    var ans = []
    var word = ''
    while (stack.length) {
        var top = stack.pop();
        if (top === " ") {
            ans.unshift(word)
            word = "";
        } else {
            word += top;
        }
    }
    ans.unshift(word)

    return ans.join(' ');
};


var test = "Let's take LeetCode contest";
console.log(reverseWords(test));