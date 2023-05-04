/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function (words) {
    var len = words[0].length;
    for (var i = 1; i < len; ++i) {
        for(var j = 1; j < words.length-1; ++j){
            var prev = words[j-1]
            var cur = words[j]
            var next = words[j+1]

            var a = calc(prev, i)
            var b = calc(cur, i)
            var c = calc(next, i)
            if(a === b && b !== c){
                return next
            }
            if(a === c && a !== b) {
                return cur
            }
            if(b === c && a !== b){
                return prev
            }
        }
    }
    function calc(word,i){
        return word.charCodeAt(i) - word.charCodeAt(i - 1);
    }
};

var words = ["adc", "wzy", "abc"];
words = ["aaa", "bob", "ccc", "ddd"];
words = ["mll","edd","jii","tss","fee","dcc","nmm","abb","utt","zyy","xww","tss","wvv","xww","utt"]

words = ["jii", "aba", "ihh", "zyy"];

var ans = oddString(words);
console.log(ans);
