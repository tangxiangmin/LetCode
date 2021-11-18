/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
    var words = s.split(" ");
    var list = [];
    for (var word of words) {
        var len = word.length;
        var idx = word[len - 1];
        var sub = word.substring(0, len - 1);
        list[idx - 1] = sub;
    }
    return list.join(" ");
};

var s = "is2 sentence4 This1 a3";
var ans = sortSentence(s);
console.log(ans);
