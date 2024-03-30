/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
    let ans = 0
    for (let i = low; i <= high; ++i) {
        if (check(i)) {
            ans++
        }
    }
    return ans

    function check(num) {
        const s = num.toString()
        if (s.length % 2 === 1) return false
        let l = 0
        let r = s.length - 1
        let front = 0
        let back = 0
        while (l < r) {
            front += +s[l++]
            back += +s[r--]
        }
        return front === back
    }
};