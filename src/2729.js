/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function (n) {

    const str = `${n}${n * 2}${n * 3}`
    let map = {}
    for (const ch of str) {
        if (ch === '0') return false
        if (!map[ch]) {
            map[ch] = 1
        } else {
            return false
        }
    }
    return Object.keys(map).length === 9
};

var n = 192
var ans = isFascinating(n)
console.log(ans)