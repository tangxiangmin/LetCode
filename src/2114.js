/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
    return Math.max.apply(null, sentences.map(findSentenceWordNum));

    function findSentenceWordNum(sentence) {
        return sentence.split(" ").length;
    }
};

var sentences = [
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
];

var ans = mostWordsFound(sentences);

console.log(ans);
