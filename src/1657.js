/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
// 思路：操作1可以忽略字符的顺序；操作2可以改变字符的频率，因此只要两个字符串包含的字符种类相同，且频率列表一致，则可以互相转换
var closeStrings = function (word1, word2) {

    const m1 = getMap(word1)
    const m2 = getMap(word2)

    const a1 = Object.values(m1).sort((a, b) => a - b)
    const a2 = Object.values(m2).sort((a, b) => a - b)
    if (a1.length !== a2.length) return false
    for (const key in m1) {
        if (!m2[key]) return false
    }

    return a1.every((row, index) => {
        return row === a2[index]
    })

    function getMap(s) {
        const map = {}
        for (const ch of s) {
            if (!map[ch]) map[ch] = 0
            map[ch]++
        }
        return map
    }
};

var word1 = "abc", word2 = "bca"
word1 = "a", word2 = "aa"
word1 = "cabbba", word2 = "abbccc"
word1 = "uau", word2 = "ssx"
var ans = closeStrings(word1, word2)
console.log(ans)