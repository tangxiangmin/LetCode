
var Trie = function () {
    this.children = {}
    this.isEnd = false
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let node = this
    for (const ch of word) {
        const children = node.children
        if (!children[ch]) {
            children[ch] = new Trie()
        }
        node = children[ch]
    }
    node.isEnd = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    function dfs(i, node) {
        const { children, isEnd } = node
        if (i === word.length) return isEnd
        const ch = word[i]
        const child = children[ch]
        if (!child) return false
        return dfs(i + 1, child)
    }
    return dfs(0, this)

};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    function dfs(i, node) {
        const { children, isEnd } = node
        if (i === prefix.length) return true
        const ch = prefix[i]
        const child = children[ch]
        if (!child) return false
        return dfs(i + 1, child)
    }
    return dfs(0, this)
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */