/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    function compareOrder(c1, c2){
        return order.indexOf(c1) <= order.indexOf(c2)
    }
    for(var i = 0; i < words.length - 1; ++i) {
        let word = words[i]
        let next = words[i+1]

        for(let j = 0; j < word.length; ++j) {
            if(word[j] === next[j]){
                continue
            }else if(compareOrder(word[j], next[j])) {
               break 
            }else {
                return false
            }
        }
    }
    return true
};
var words = ["hello", "leetcode"],
    order = "hlabcdefgijkmnopqrstuvwxyz";

(words = ["word", "world", "row"]), (order = "worldabcefghijkmnpqstuvxyz");
words = ["l", "h"]
order = "xkbwnqozvterhpjifgualycmds";
console.log(isAlienSorted(words, order));