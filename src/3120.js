/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
    const map = {}
    const set= new Set()
    for (const ch of word) {
        const l = ch.toLowerCase()
        const u = ch.toUpperCase()
        if (ch !== l && map[l]) {
            set.add(l)
        } else if (ch !== u && map[u]) {
            set.add(l)
        }else {
            map[ch] = 1
        }
    }
    return set.size
};

var word = "Cc"
// word ="abBCab"
var ans = numberOfSpecialChars(word)
console.log(ans)