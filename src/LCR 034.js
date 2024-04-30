/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {

    const orderMap = {}
    for (let i = 0; i < order.length; ++i) {
        orderMap[order[i]] = i
    }
    for (let i = 1; i < words.length; ++i) {
        if (!compare(words[i - 1], words[i])) {
            return false
        }
    }
    return true
    // 判断a是否比b小
    function compare(a, b) {
        const n = Math.min(a.length, b.length)
        for (let i = 0; i < n; ++i) {
            const c1 = orderMap[a[i]]
            const c2 = orderMap[b[i]]
            if (c1 < c2) return true
            if (c1 > c2) return false
        }
        return a.length <= b.length

    }
};
var words = ["hello", "leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
words = ["word", "world", "row"], order = "worldabcefghijkmnpqstuvxyz"
var ans = isAlienSorted(words, order)
console.log(ans)