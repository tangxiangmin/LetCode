/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function (astr) {

    const map = new Map()
    for (const ch of astr) {
        if (map.has(ch)) return false
        map.set(ch, 1)
    }
    return true

};