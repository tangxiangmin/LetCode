/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
    var map = {};
    for (var ch of s) {
        if (!map[ch]) map[ch] = 0;
        map[ch]++;
    }

    var val = map[s[0]];
    for (var ch of Object.keys(map)) {
        if (map[ch] !== val) return false;
    }
    return true;
};
