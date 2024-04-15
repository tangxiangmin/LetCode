/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
    const n = s.length
    let ans = 0
    for (let i = 0; i < n - 1; ++i) {
        ans += Math.abs(s[i].charCodeAt(0) - s[i + 1].charCodeAt(0))
    }
    return ans
}; 

var s = "zaz"
var ans= scoreOfString(s)
console.log(ans)