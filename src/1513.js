/**
 * @param {string} s
 * @return {number}
 */
var numSub = function (s) {
    const mod = 10 ** 9 + 7
    const n = s.length

    let l = 0
    let r = 0
    let ans = 0
    while (r < n) {
        l = r
        while (s[r] === '1') {
            // 对于连续为1的子字符串，每增加长度1，表示数量为[1,r-l+1]的子字符串都会增加1
            ans = (ans + r - l + 1) % mod
            r++
        }
        r++
    }
    return ans % mod
};

var s = "0110111"
s = "101"
// s = "111111"
var ans = numSub(s)
console.log(ans)