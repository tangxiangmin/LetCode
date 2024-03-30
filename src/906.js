/**
 * @param {string} left
 * @param {string} right
 * @return {number}
 */
// BF
var superpalindromesInRange = function (left, right) {

    left = +left
    right = +right
    let ans = 0
    for (let i = left; i <= right; ++i) {
        if (check(i) && check(Math.sqrt(i))) {
            ans++
        }
    }
    return ans

    function check(n) {
        const s = n.toString()
        if (s.length === 1) return true
        let l = 0
        let r = s.length - 1
        while (l < r) {
            if (s[l] !== s[r]) return false
            l++
            r--
        }
        return true
    }
};

var L = "4", R = "1000"
var ans = superpalindromesInRange(L, R)
console.log(ans)