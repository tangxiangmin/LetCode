/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */
var twoEditWords = function (queries, dictionary) {

    let ans = []
    for (const word of queries) {
        for (const w of dictionary) {
            if (check(word, w)) {
                ans.push(word)
                break
            }
        }
    }
    return ans

    function check(w1, w2) {
        if (w1.length !== w2.length) return false
        let n = w1.length
        let cnt = 0
        for (let i = 0; i < n; ++i) {
            if (w1[i] !== w2[i]) {
                cnt++
            }
            if (cnt > 2) return false
        }
        return true
    }

};