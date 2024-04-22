/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
// BF
var numMatchingSubseq = function (s, words) {
    let ans = 0
    for (const word of words) {
        if (check(word, s)) {
            ans++
        }
    }
    return ans

    function check(word, s) {
        let i = 0
        for (const ch of s) {
            if (ch === word[i]) {
                i++
            }
            if (i === word.length) return true
        }
        return false
    }
};
// BF 会超时，优化一下check的算法
var numMatchingSubseq = function (s, words) {

    const pos = {}
    let n = s.length
    for (let i = 0; i < n; ++i) {
        const ch = s[i]
        if (!pos[ch]) {
            pos[ch] = []
        }
        pos[ch].push(i)
    }
    // console.log(JSON.stringify(pos))

    let ans = 0
    for (const word of words) {
        if (check(word)) {
            // console.log(word)
            ans++
        }
    }
    return ans

    function check(word) {
        let p = -1 // 当前cur的
        // if (word === 'acd') debugger
        for (const ch of word) {
            // 找到list中第一个大于p的左边界
            const list = pos[ch]
            if (!list || list.length === 0) return false
            let l = 0
            let r = list.length - 1
            if (list[r] <= p) return false
            while (l <= r) {
                const mid = (l + r) >> 1
                if (list[mid] > p) {
                    r = mid - 1
                } else {
                    l = mid + 1
                }
            }
            if (l === list.length) return false
            p = list[l]
        }
        return true
    }
}
var s = "abcde", words = ["a", "bb", "acd", "ace"]
// s = "dsahjpjauf", words = ["ahjpjau", "ja", "ahbwzgqnuk", "tnmlanowax"]
s = "wwwwwp", words = ['wp', 'wp']
var ans = numMatchingSubseq(s, words)
console.log(ans)