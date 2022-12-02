/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function (patterns, word) {
    let ans = 0
    patterns.forEach(p=>{
        if(word.includes(p)){
            ans++
        }
    })
    return ans
};

var patterns = ["a", "abc", "bc", "d"],
    word = "abc";

var ans = numOfStrings(patterns, word);
console.log(ans);
