/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
    words.sort((a, b) => a.length - b.length);
    var ans = new Set();

    var len = words.length
    for (var i = 0; i < len; ++i) {
        var cur = words[i];
        for (var j = i + 1; j < len; ++j) {
            if (words[j].includes(cur)) {
                ans.add(cur);
            }
        }
    }
    return Array.from(ans);
};


var words = ["mass","as","hero","superhero"]
var ans = stringMatching(words)
console.log(ans)
