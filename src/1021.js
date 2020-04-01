/**
 * @param {string} S
 * @return {string}
 */
// 使用栈
var removeOuterParentheses = function(S) {
    var stack = [];
    var start = 0;
    var ans = "";
    for (let i = 0; i < S.length; ++i) {
        var ch = S[i];
        if (ch == "(") {
            stack.push(ch);
        } else {
            stack.pop();
        }
        // 如果stack为空，表示到i之间的字符串需要去除最外层括号
        if (stack.length == 0) {
            ans += S.slice(start + 1, i);
            start = i + 1;
        }
    }
    return ans;
};

var s = "(()())(())"
s = "(()())(())(()(()))"
var res = removeOuterParentheses(s)
console.log(res)