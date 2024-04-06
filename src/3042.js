/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function (words) {
    const n = words.length
    let ans = 0
    for (let i = 0; i < n; ++i) {
        for (let j = i + 1; j < n; ++j) {
            if (isPrefixAndSuffix(words[i], words[j])) {
                ans++
            }
        }
    }
    return ans

    function isPrefixAndSuffix(s1, s2) {
        if (s2.length < s1.length) return false
        if (s1 === s2) return true

        const n = s1.length
        const n2 = s2.length
        for (let i = 0; i < n; ++i) {
            if (s2[i] !== s1[i]) return false
            if (s2[n2 - n + i] !== s1[i]) return false
        }
        return true
    }
};