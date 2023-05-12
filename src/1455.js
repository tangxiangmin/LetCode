/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
    var words = sentence.split(" ");

    for (var i = 0; i < words.length; ++i) {
        var word = words[i];
        if (word.indexOf(searchWord) === 0) {
            return i + 1;
        }
    }
    return -1;
};

var sentence = "i love eating burger",
    searchWord = "burg";
    sentence = "this problem is an easy problem", searchWord = "pro"
    sentence = "i am tired", searchWord = "you"
var ans = isPrefixOfWord(sentence, searchWord);
console.log(ans)