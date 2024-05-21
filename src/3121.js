/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
    const n = word.length
    const map = {}
    for (let i = 0; i < n; ++i) {
        const ch = word[i]
        if (!map[ch]) map[ch] = []
        map[ch].push(i)
    }
    let ans = 0
    for (const key in map) {
        const l = key.toLowerCase()
        const u = key.toUpperCase()
        if (key === l) {
            const list = map[key]
            if (map[u] && map[u][0] > list[list.length - 1]) {
                ans++
            }
        }
    }
    return ans
};