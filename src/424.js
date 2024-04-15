/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    const map = {}
    let l = 0
    let r = 0
    const n = s.length
    let cnt = k
    while (r < n) {
        const ch = s[r]
        r++
    }
};

// 
var characterReplacement = function (s, k) {

    function walk(s) {
        const n = s.length
        let ans = 0
        for (let i = 0; i < n; ++i) {
            let cnt = k
            let j = i +1
            let ch = s[i]
            while (cnt > 0 && j <n) {
                if (s[j] !== ch) {
                    cnt--
                }
                j++
            }
            while (j < n && s[j] === ch) {
                j++
            }
            ans = Math.max(ans, j - i)
        }
        return ans
    }
    return Math.max(walk(s), walk(s.split('').reverse().join('')))
}


var s = 'AABABBA', k = 1
// s = "ABAB", k = 2
s = "ABBB", k = 2
s ="BAAAB",k =2
var res = characterReplacement(s, k)
console.log(res)