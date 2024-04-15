/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var findString = function (words, s) {
    var left = 0, right = words.length
    while (left < right) {
        var mid = (left + right) >> 1;
        var cop = mid;
        while (cop >= left && words[cop] == "") {
            --cop;
        }
        if (cop < left) {
            left = mid + 1;
            continue;
        }
        if (words[cop] < s) {
            left = mid + 1;
        }
        else if (words[cop] > s) {
            right = cop;
        }
        else {
            return cop;
        }
    }
    return -1;

};