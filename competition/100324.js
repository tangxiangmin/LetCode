/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
    const stack = []
    for (const ch of s) {
        if (/\d/.test(ch)) {
            stack.pop()
        } else {
            stack.push(ch)
        }
    }
    return stack.join('')
};
var s = "cb34"
s = "abc"
var ans= clearDigits(s)
console.log(ans)