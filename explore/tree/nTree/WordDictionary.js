/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
    this.data = {};
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    var len = word.length;
    var target = this.data[len];

    if (!target) {
        this.data[len] = {
            [word]: true
        };
    } else {
        target[word] = true;
    }
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    var data = this.data;
    var len = word.length;
    var target = data[len];
    console.log(word)

    if (!target) {
        return false;
    }

    if (target[word]) {
        return true;
    }

    var START = "a".charCodeAt(0);
    var END = "z".charCodeAt(0);

    var str = "";
    for (var i = 0; i < word.length; ++i) {
        var c = word[i];
        if (c === ".") {
            for (var j = START; j <= END; ++j) {
                // 拼接所有可能的字符串
                var tmp = str + String.fromCharCode(j) + word.substr(i + 1);
                if (tmp.length !== word.length) {
                    continue;
                }

                if (this.search(tmp)) {
                    return true;
                }
            }
        } else {
            str += c;
        }
    }
    return false;
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

var method = ["WordDictionary", "addWord", "addWord", "addWord", "addWord", "addWord", "addWord", "addWord", "addWord", "search", "search", "search", "search", "search", "search", "search", "search", "search", "search"];
var params = [[], ["ran"], ["rune"], ["runner"], ["runs"], ["add"], ["adds"], ["adder"], ["addee"], ["r.n"], ["ru.n.e"], ["add"], ["add."], ["adde."], [".an."], ["...s"], ["....e."], ["......."], ["..n.r"]];


var w
method.forEach((item, index) => {
    if(item === 'WordDictionary'){
        w = new WordDictionary()
    }else if(item === 'addWord'){
        w.addWord(params[index])
    }else if(item === 'search'){
        var res = w.search(params[index])
        console.log(res)
    }
});
