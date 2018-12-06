/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {

    let res = words.filter(function(word){
        if(word.length !== pattern.length){
            return false
        }

        let hash = {}
        for (let i = 0; i < pattern.length; ++i){
            let key = pattern[i]
            if(!hash[key]){
                hash[key] = word[i]
            }else if(hash[key] !== word[i]){
                return false
            }
        }

        let map = {}
        for(let key in hash){
            let val = hash[key]
            if(!map[val]){
                map[val] = key
            }else {
                return false
            }
        }
        return true
    })
    return res
};
let words = ["abc", "deq", "mee", "aqq", "dkd", "ccc"], pattern = "abb"
findAndReplacePattern(words, pattern);