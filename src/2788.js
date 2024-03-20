/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function (words, separator) {
    let ans = []
    for (const word of words) {
        ans = ans.concat(word.split(separator).filter(Boolean))
    }
    return ans
};

var words = ["one.two.three", "four.five", "six"], separator = "."
var ans = splitWordsBySeparator(words, separator)
console.log(ans)