/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function (s) {
    if (!s.length) return 0;

    return s.split("").reverse().join("") === s ? 1 : 2;
};
