/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkIfCanBreak = function (s1, s2) {
    const a1 = s1.split('').sort()
    const a2 = s2.split('').sort()

    return check(a1, a2) || check(a2, a1)

    function check(a1, a2) {
        const n = a1.length
        for (let i = 0; i < n; ++i) {
            if (a1[i] < a2[i]) {
                return false
            }
        }
        return true
    }
};
var s1 = "abc", s2 = "xya"
var ans = checkIfCanBreak(s1, s2)
console.log(ans)