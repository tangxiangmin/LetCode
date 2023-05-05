/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function (words, target, startIndex) {
    if (!words.includes(target)) return -1;
    var r = startIndex;
    var l = startIndex;
    var len = words.length;
    while (words[r] !== target && words[l] !== target) {
        r++;
        l--;
        if (r >= len) {
            r = 0;
        }

        if (l < 0) {
            l = len - 1;
        }
    }

    var result = words[r] === target ? r : l;

    if (result === startIndex) return 0;
    if (result > startIndex) {
        return Math.min(result - startIndex, len - result + startIndex);
    }
    return Math.min(startIndex - result, len - startIndex + result);
};

var words = ["hello", "i", "am", "leetcode", "hello"],
    target = "hello",
    startIndex = 1;
    words = ["a","b","leetcode"], target = "leetcode", startIndex = 0
    
var ans = closetTarget(words, target, startIndex);
console.log(ans);
