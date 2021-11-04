/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
    const map = {};
    for (const ch of brokenLetters) {
        map[ch] = true;
    }

    const words = text.split(" ");
    let ans = 0;

    for (const word of words) {
        if (canType(word)) ans++;
    }

    return ans;

    function canType(word) {
        for (const ch of word) {
            if (map[ch]) return false;
        }
        return true;
    }
};

var text = "hello world",
    brokenLetters = "ad";
const ans = canBeTypedWords(text, brokenLetters);
console.log(ans);
