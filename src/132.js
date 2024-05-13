/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
    const n = s.length
    const dp = new Array(n + 1).fill(Infinity)
    dp[0] = 0

    for (let i = 1; i <= n; ++i) {
        for (let j = i - 1; j >= 0; --j) {
            if (check(j, i)) {

            }
            dp[i] = Math.min(dp[i - 1])

        }
    }

    function check(i, j) {
        while (i < j) {
            if (s[i] !== s[j]) return false
            i++
            j--
        }
        return true
    }

};