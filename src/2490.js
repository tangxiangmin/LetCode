/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    if(sentence[sentence.length -1] !== sentence[0]) return false
    for(var i = 0; i < sentence.length; ++i){
        var ch = sentence[i]
        if(ch !== ' ') continue
        var prev = sentence[i-1]
        var next = sentence[i+1]
        if(prev !== next) return false
    }
    return true
};

var sentence = "leetcode exercises sound delightful"
sentence = "eetcode"
sentence = "Leetcode is cool"
sentence = "MuFoevIXCZzrpXeRmTssj lYSW U jM"

var ans = isCircularSentence(sentence)
console.log(ans)