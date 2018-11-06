// 给定摩尔斯编码，和对应的字符串，求有多少种不同的编码组合


/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
    var morseCode =
        [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];

    var res = [];
    var aCode = 97;
    words.forEach(word=>{
        var str ='' ;
        for(var i = 0; i < word.length; ++i){
            var index = word.charCodeAt(i) - aCode;
            str += morseCode[index];
        }
        res.push(str);
    })
    var set = new Set(res)
    return set.size;
};


var input = ["gin", "zen", "gig", "msg"];
var output = uniqueMorseRepresentations(input);
console.log(output)