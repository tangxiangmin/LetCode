/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function (firstWord, secondWord, targetWord) {
    const start = "a".charCodeAt(0);
    return (
        transform(firstWord) + transform(secondWord) === transform(targetWord)
    );
    function transform(s) {
        var ans = 0;
        for (var ch of s) {
            const num = parseInt(ch.charCodeAt(0) - start, 10);
            ans = ans * 10 + num;
        }
        return ans;
    }
};

var a = "j";
var b = "j";
var c = "bi";

// "j"
// "j"
// "bi"
var ans = isSumEqual(a, b, c);
console.log(ans);
