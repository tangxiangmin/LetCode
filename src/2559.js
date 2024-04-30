/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function (words, queries) {
    const arr = words.map(word => {
        const re = /a|e|i|o|u/
        if (re.test(word[0]) && re.test(word[word.length - 1])) {
            return 1
        }
        return 0
    })
    const preSums = [arr[0]]
    for (let i = 1; i < arr.length; ++i) {
        preSums[i] = preSums[i - 1] + arr[i]
    }

    const ans = []
    for (const [l, r] of queries) {
        const val = preSums[r] - (l > 0 ? preSums[l - 1] : 0)
        ans.push(val)
    }
    return ans
};
var words = ["aba", "bcb", "ece", "aa", "e"], queries = [[0, 2], [1, 4], [1, 1]]
var ans = vowelStrings(words, queries)
console.log(ans)