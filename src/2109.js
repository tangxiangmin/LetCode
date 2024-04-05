/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s, spaces) {
    let ans = ''
    let j = 0
    for (const i of spaces) {
        ans += s.slice(j, i) + ' '
        j = i
    }
    return ans + s.slice(j)
};
var s = "LeetcodeHelpsMeLearn", spaces = [8, 13, 15]
var ans = addSpaces(s, spaces)
console.log(ans)