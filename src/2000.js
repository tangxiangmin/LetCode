/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
    var len = word.length;
    var prefix = "";
    var sub = "";
    var flag = false;
    for (var c of word) {
        if (!flag) {
            prefix = c + prefix;
        } else {
            sub += c;
        }

        if (c === ch) {
            flag = true;
        }
    }
    return flag ? prefix + sub : word;
};

var word = "abcdefd",
    ch = "d";
    word = "xyxzxe", ch = "z"
var ans = reversePrefix(word, ch);
console.log(ans);
