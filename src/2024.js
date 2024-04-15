/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
// 维护区间中另外一种字符的长度
var maxConsecutiveAnswers = function (answerKey, k) {
    const n = answerKey.length

    function walk(target) {
        let l = 0
        let r = 0
        let cnt = 0
        let ans = 0
        while (r < n) {
            const ch = answerKey[r]
            r++
            if (ch !== target) {
                cnt++
            }
            while (cnt > k) {
                if (answerKey[l] !== target) {
                    cnt--
                }
                l++
            }
            ans = Math.max(ans, r - l)
        }
        return ans
    }

    return Math.max(walk('T'), walk('F'))
};

var answerKey = "TTFF", k = 2
// answerKey = "TFFT", k = 1
// answerKey = "TTFTTFTT", k = 1
answerKey = "TTFTTTTTFT", k = 1
var ans = maxConsecutiveAnswers(answerKey, k)
console.log(ans)