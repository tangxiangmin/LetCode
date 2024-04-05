/**
 * @param {string} s
 * @return {string}
 */
// 使用栈从左向右，遇见*号就出栈
var removeStars = function (s) {
    let ans = []
    for (const ch of s) {
        if (ch === '*') {
            ans.pop()
        } else {
            ans.push(ch)
        }
    }
    return ans.join('')
};