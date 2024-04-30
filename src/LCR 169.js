/**
 * @param {string} arr
 * @return {character}
 */
var dismantlingAction = function (arr) {
    const map = {}
    for (const ch of arr) {
        if (!map[ch]) map[ch] = 0
        map[ch]++
    }
    for (const ch of arr) {
        if (map[ch] === 1) return ch
    }
    return ' '
};