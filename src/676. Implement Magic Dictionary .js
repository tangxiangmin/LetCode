/**
 * Initialize your data structure here.
 */
var MagicDictionary = function () {
    this.data = []
};

/**
 * Build a dictionary through a list of words 
 * @param {string[]} dict
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function (dict) {
    this.data = dict
};

/**
 * Returns if there is any word in the trie that equals to the given word after modifying exactly one character 
 * @param {string} word
 * @return {boolean}
 */
MagicDictionary.prototype.search = function (word) {
    function diff(s1, s2){
        if(s1.length !== s2.length || s1 === s2){
            return false
        }

        let count = 0
        for(let i = 0; i < s1.length; ++i){
            if(s1[i] !== s2[i]){
                count++
            }

            if(count > 1){
                return false
            }
        }
        return count === 1
    }

    for(let i = 0; i < this.data.length; ++i){
        let item = this.data[i]
        if(diff(item, word)){
            return true
        }
    }
    return false
};

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = Object.create(MagicDictionary).createNew()
 * obj.buildDict(dict)
 * var param_2 = obj.search(word)
 */
