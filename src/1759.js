/**
 * @param {string} s
 * @return {number}
 */
// 跟1513题相似，对于连续字符相同的子字符串，每增加长度1，表示数量为[1,r-l+1]的子字符串都会增加1
var countHomogenous = function (s) {
    const mod = 10 ** 9 + 7
    const n = s.length
    let l = 0
    let r = 0
    let ans = 0
    while (r < n) {
        const ch = s[r]
        if (s[l] !== ch) {
            l = r
        }
        ans = (ans + r - l + 1) % mod
        r++
    }
    return ans % mod
};
var s = "abbcccaa"
var ans = countHomogenous(s)
console.log(ans)