/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function (s, letter) {
    var len = s.length;
    var count = 0;
    for (var ch of s) {
        if (ch === letter) {
            count++;
        }
    }
    return Math.floor((count / len) * 100);
};
var s = "foobar",
    letter = "o";
var ans = percentageLetter(s, letter);
console.log(ans);
