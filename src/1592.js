/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
    var len = text.length;
    var words = [];
    var spaces = 0;
    var word = "";
    for (var i = 0; i < len; ++i) {
        var ch = text[i];
        if (ch === " ") {
            spaces++;
        } else {
            word += ch;
            if (i === len - 1 || text[i + 1] === " ") {
                words.push(word);
                word = "";
            }
        }
    }

    if (words.length > 1) {
        var per = Math.floor(spaces / (words.length - 1));

        var ans = words.join(" ".repeat(per));

        var left = spaces % (words.length - 1);
        ans += " ".repeat(left);
        return ans;
    } else {
        return words[0] + " ".repeat(spaces);
    }
};
var text = "  this   is  a sentence ";
text = "  hello";
text = "a b c "
var ans = reorderSpaces(text);
console.log(ans);
