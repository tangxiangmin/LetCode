/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

    const stack = []

    for (const ch of s) {
        if (ch === 'c' && stack.length >= 2 && stack[stack.length - 1] === 'b' && stack[stack.length - 2] === 'a') {
            stack.pop()
            stack.pop()
        } else {
            stack.push(ch)
        }
    }
    return stack.length === 0

};