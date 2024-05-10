/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s === t) return false

    const map = {}
    for (const ch of s) {
        if (!map[ch]) map[ch] = 0
        map[ch]++
    }
    for (const ch of t) {
        if (map[ch] === undefined) return false
        map[ch]--
        if (map[ch] < 0) return false
    }
    for (const key in map) {
        if (map[key] > 0) return false
    }
    return true
};

// 思路2：排序后比较
var isAnagram = function (s, t) {
    if (s === t) return false
    if (s.length !== t.length) return false
    const a1 = s.split('').sort()
    const a2 = t.split('').sort()
    const n = a1.length
    for (let i = 0; i < n; ++i) {
        if (a1[i] !== a2[i]) {
            return false
        }
    }
    return true
}