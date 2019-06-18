/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var words = [];
    var cur = "";
    for (var i = 0; i < s.length; ++i) {
        var c = s[i];
        if (c !== " ") {
            cur += c;
        } else if (cur) {
            words.push(cur);
            cur = "";
        }
    }
    if (cur) {
        words.push(cur);
    }
    var start = 0, end = words.length - 1;
    while (start < end) {
        var tmp = words[start];
        words[start++] = words[end];
        words[end--] = tmp;
    }

    return words.join(" ");
};

var res = reverseWords("  hello world!  ");
console.log(res);
