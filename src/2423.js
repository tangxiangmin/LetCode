/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function (word) {
    var map = {};
    for (var ch of word) {
        if (!map[ch]) map[ch] = 0;
        map[ch]++;
    }
    var list = Object.values(map);
    list.sort((a, b) => a - b);

    var len = list.length;

    if (list.length === 1) return true;
    if (list[0] === 1 && list[1] === list[len - 1]) return true;
    if (list[len - 1] - list[len - 2] === 1 && list[0] === list[len - 2])
        return true;
    return false;
};

[1, 1, 1, 2, 2, 2];

var word = "abcc";
// word = "aazz";
// word = "bac";
// word = "cbbd";
// word = "aabcbb"
// word = "ddaccb";
// word = "abbcc"
word = "aazz";
// word = "zz";
var ans = equalFrequency(word);
console.log(ans);
