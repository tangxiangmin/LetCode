var Trie = function() {
    this.root = {
        val: "",
        children: {}
    };
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    var cur = this.root;
    var str = "";

    for (var i = 0; i < word.length; ++i) {
        var children = cur.children;
        var c = word[i];
        str += c;

        if (children[str]) {
            // 判断是否有较短的前缀
            cur = children[str];
        } else {
            // 没有则直接将其作为前缀
            children[word] = {
                val: word,
                children: {}
            };
            break;
        }
    }
};

Trie.prototype.getPrefix = function(word) {
    var cur = this.root;
    var str = "";
    for (var i = 0; i < word.length; ++i) {
        var c = word[i];
        str += c;
        var children = cur.children;
        if (children[str]) {
            // 返回最短词根
            return str
        }
    }
    return word
};

/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dict, sentence) {
    var trie = new Trie();
    dict.sort((a, b) => a.length - b.length).forEach(word => {
        trie.insert(word);
    });


    var words = sentence.split(" ");
    var ans = words.map(word => {
        var root = trie.getPrefix(word);
        return root;
    });
    return ans.join(' ')
};

var dict = ["cat", "bat", "rat"];
var sentence = "the cattle was rattled by the battery";
var res = replaceWords(dict, sentence);
console.log(res)