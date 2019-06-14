/**
 * https://leetcode-cn.com/explore/learn/card/queue-stack/218/stack-last-in-first-out-data-structure/878/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = []
    for(var i = 0; i < s.length; ++i) {
        var c = s[i]
        var top = stack[stack.length - 1];
        if (
            (top === "(" && c === ")") ||
            (top === "[" && c === "]") ||
            (top === "{" && c === "}")
        ) {
            stack.pop();
        } else {
            stack.push(c);
        }
    }
    return stack.length === 0
};

var res = isValid("]");
console.log(res)