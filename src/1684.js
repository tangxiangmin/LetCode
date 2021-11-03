/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
    let map = {};
    for (let i = 0; i < allowed.length; ++i) {
        map[allowed[i]] = true;
    }
    let ans = 0;
    for (const word of words) {
        if (isSame(word)) {
            ans++;
        }
    }
    return ans;
    function isSame(str) {
        for (let i = 0; i < str.length; ++i) {
            if (!map[str[i]]) return false;
        }
        return true;
    }
};
