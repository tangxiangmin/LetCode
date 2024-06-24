/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function (words) {
    // 保存每个长度的单词列表，方便查找下一个单词
    const map = {}
    for (const word of words) {
        const len = word.length
        if (!map[len]) map[len] = []
        map[len].push(word)
    }

    const cache = {}

    let ans = 1
    for (const word of words) {
        ans = Math.max(ans, find(word))
    }

    return ans

    function find(i) {
        if (cache[i]) return cache[i]
        const next = map[i.length + 1]
        if (!next) return 1
        let ans = 1
        for (const p of next) {
            if (check(i, p)) {
                ans = Math.max(ans, find(p) + 1)
            }
        }

        return cache[i] = ans
    }

    function check(a, b) {
        const n = a.length
        if (n + 1 !== b.length) return false
        let flag = true
        let i = 0
        let j = 0
        while (i < n) {
            if (a[i] !== b[j]) {
                if (!flag) return false
                flag = false
                j++ // 向后挪动一个
                continue
            }
            i++
            j++
        }

        return true
    }
};
var words = ["a", "b", "ba", "bca", "bda", "bdca"]
words = ["abcd", "dbqca"]
words =
    ["ksqvsyq", "ks", "kss", "czvh", "zczpzvdhx", "zczpzvh", "zczpzvhx", "zcpzvh", "zczvh", "gr", "grukmj", "ksqvsq", "gruj", "kssq", "ksqsq", "grukkmj", "grukj", "zczpzfvdhx", "gru"]
words = ["a", "ab", "ac", "bd", "abc", "abd", "abdd"]
var ans = longestStrChain(words)
console.log(ans)