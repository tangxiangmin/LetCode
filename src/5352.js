/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    if (n === 1) {
        return "a";
    }
    if (n % 2 === 0) {
        return "a".repeat(n - 1) + "b";
    } else {
        return "a".repeat(n - 2) + "b" + "c";
    }
};

console.log(generateTheString(7))