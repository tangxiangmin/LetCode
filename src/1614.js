/**
 * @param {string} s
 * @return {number}
 */
// 栈的应用
var maxDepth = function (s) {
    var stack = [];
    var deep = 0;
    for (var ch of s) {
        if (ch === "(") {
            deep = Math.max(stack.length + 1, deep);
            stack.push(true);
        } else if (ch === ")") {
            stack.pop();
        }
    }
    return deep;
};
var s = "(1+(2*3)+((8)/4))+1";
s = "(1)+((2))+(((3)))"
s = "1+(2*3)/(2-1)"
s = "1"
var ans = maxDepth(s);
console.log(ans);
