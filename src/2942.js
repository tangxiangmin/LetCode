/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
    const ans = []
    for (let i = 0; i < words.length; ++i) {
        const word = words[i]
        if (word.includes(x)) {
            ans.push(i)
        }
    }
    return ans
};