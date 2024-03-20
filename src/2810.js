/**
 * @param {string} s
 * @return {string}
 */

var finalString = function (s) {
    let ans = ''
    for (const ch of s) {
        if (ch === 'i') {
            let r = ''
            for (const c of ans) {
                r = c + r
            }
            ans = r
        } else {
            ans += ch
        }
    }
    return ans
};
// 这道题还可以用双端队列

var s = "string"
var ans = finalString(s)
console.log(ans)