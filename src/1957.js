/**
 * @param {string} s
 * @return {string}
 */
// 使用一个栈，找到三个以上连续的，执行出栈
var makeFancyString = function (s) {
    var stack = [];
    var ans = "";
    for (var ch of s) {
        var top = stack[stack.length - 1];
        if (!top || top.key !== ch) {
            stack.push({
                key: ch,
                num: 1,
            });
            ans += ch;
        } else {
            if (top.num < 2) {
                top.num++;
                ans += ch;
            }
        }
    }
    return ans;
};

var s = "leeetcode"
s = "aaabaaaa"
var ans = makeFancyString(s)
console.log(ans)