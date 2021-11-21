/**
 * @param {string[]} words
 * @return {boolean}
 */
// 思路，统计字符出现次数看看是否能均分
var makeEqual = function (words) {
    var len = words.length;
    var map = {};
    for (var word of words) {
        for (var ch of word) {
            if (!map[ch]) {
                map[ch] = 0;
            }
            map[ch]++;
        }
    }

    var keys = Object.keys(map);
    for (var key of keys) {
        if (map[key] % len !== 0) return false;
    }
    return true;
};
