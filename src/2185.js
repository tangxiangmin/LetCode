/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
    var ans = 0;
    words.forEach((word) => {
        if (word.indexOf(pref) === 0) {
            ans++;
        }
    });
    return ans;
};
