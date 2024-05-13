/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function (s1, s2) {

    const map = {}
    for (const ch of s1) {
        if (!map[ch]) map[ch] = 0
        map[ch]++
    }
    for (const ch of s2) {
        if (!map[ch]) return false
        map[ch]--
    }

    for (const key in map) {
        if (map[key] !== 0) return false
    }
    return true

};