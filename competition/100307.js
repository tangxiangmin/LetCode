/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function (s) {
    let cur = 0
    let ans = 0
    for (const ch of s) {
        if (ch === 'E') {
            cur++
        } else if (ch === 'L') {
            cur--
        }
        ans = Math.max(ans, cur)
    }
    return ans
};
var s = "EEEEEEE"
// s = "ELELEEL"
var ans = minimumChairs(s)
console.log(ans)