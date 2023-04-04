/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
    var count = 0
    for(var word of words){
        if(s.startsWith(word)){
            count++
        }
    }
    return count
};

var words = ["a","b","c","ab","bc","abc"], s = "abc"

var ans = countPrefixes(words, s)

console.log(ans)