/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
    return word1.join("") === word2.join("");
};

var ans = arrayStringsAreEqual(["ab", "c"], ["a", "bc"]);
console.log(ans);
