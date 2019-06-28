/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.root = {
        val: '',
        children: {}
    }
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    var cur = this.root
    var str = ''
    for(var i = 0; i < word.length; ++i){
        var children = cur.children;
        var c = word[i]
        str += c
        if (!children[str]) {
            children[str] = {
                val: str,
                isWord: false,
                children: {}
            };
        }
        cur = children[str];
        if(str === word){
            cur.isWord = true
        }
    }
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    var cur = this.root
    var str = ''
    for(var i = 0; i < word.length; ++i){
        var c = word[i]
        str += c
        var children = cur.children;
        if(!children[str]){
            return false
        }else {
            cur = children[str];
        }
    }
    return cur.isWord;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
      var cur = this.root;
      var str = "";
      for (var i = 0; i < word.length; ++i) {
          var c = word[i];
          str += c;
          var children = cur.children;
          if (!children[str]) {
              return false;
          } else {
              cur = children[str];
          }
          if(str === prefix){
              return true
          }
      }
      return false
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
