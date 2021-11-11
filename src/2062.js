/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function (word) {
    var dict = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true,
    };

    var ans = 0;
    for (var i = 0; i < word.length; ++i) {
        if (!dict[word[i]]) {
            continue;
        }
        var tmp = 1;
        var map = {};
        map[word[i]] = true;
        for (var j = i + 1; j < word.length; j++) {
            if (dict[word[j]]) {
                if (!map[word[j]]) {
                    tmp++;
                    map[word[j]] = true;
                }
                if (tmp == 5) {
                    ans++;
                }
            } else {
                break;
            }
        }
    }
    return ans;
};

var word = "aeiouu";
word = "unicornarihan"
word = "cuaieuouac"
var ans = countVowelSubstrings(word);

console.log(ans);
