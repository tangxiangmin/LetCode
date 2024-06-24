/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
    const a = getMap(s)
    const b = getMap(t)

    let ans = 0
    for (const ch in a) {
        const i = a[ch]
        const j = b[ch] ?? 0
        if (i > j) {
            ans += i - j

        }
    }
    return ans
    function getMap(s) {
        const map = {}
        for (const ch of s) {
            if (!map[ch]) map[ch] = 0
            map[ch]++
        }
        return map
    }
};
var s = "bab", t = "aba"
// s = "leetcode", t = "practice"
var ans = minSteps(s, t)
console.log(ans)