/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
    var prefix = s.substr(0, n)
    return s.substr(n) + prefix
};

console.log(reverseLeftWords("abcdefg", 2))