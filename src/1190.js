/**
 * @param {string} s
 * @return {string}
 */
// 用栈
var reverseParentheses = function (s) {
    const stack = []
    let ans = ''
    for (const ch of s) {

        if (ch == '(') {
            stack.push('')
        } else if (ch == ')') {
            const res = reverse(stack.pop())
            if (stack.length) {
                stack[stack.length - 1] += res
            } else {
                ans += res
            }
        } else {
            if (stack.length) {
                stack[stack.length - 1] += ch
            } else {
                ans += ch
            }
        }
    }
    return ans
    function reverse(str) {
        let ans = ''
        for (let i = str.length - 1; i >= 0; --i) {
            ans += str[i]
        }
        return ans
    }
};
var s = "(abcd)"
s = "(u(love)i)"
s = "(ed(et(oc))el)"
var ans = reverseParentheses(s)
console.log(ans)