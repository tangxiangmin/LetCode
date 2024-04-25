// 使用数组模拟会超时
// var WordDictionary = function () {
//     this.arr = []

// };

// WordDictionary.prototype.addWord = function (word) {
//     this.arr.push(word)
// };

// WordDictionary.prototype.search = function (word) {
//     const list = this.arr.filter(row => row.length === word.length)
//     if (!list.length) return false

//     function dfs(i, s) {
//         if (i === s.length) return true
//         if (word[i] !== '.' && word[i] !== s[i]) {
//             return false
//         }
//         return dfs(i + 1, s)
//     }
//     for (const w of list) {
//         if (dfs(0, w)) return true
//     }
//     return false
// };

class TrieNode {
    constructor() {
        this.children = {}
        this.isEnd = false
    }
    insert(word) {
        let node = this
        for (const ch of word) {
            const { children } = node
            if (!children[ch]) {
                children[ch] = new TrieNode()
            }
            node = children[ch]
        }
        node.isEnd = true
    }
}

var WordDictionary = function () {
    this.root = new TrieNode()
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    this.root.insert(word)
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    // if (word === 'bad') debugger

    function dfs(i, node) {
        let { children, isEnd } = node
        if (i === word.length) return isEnd

        if (word[i] !== '.') {
            node = children[word[i]]
            if (!node) return false
            if (dfs(i + 1, node)) {
                return true
            }
        } else {
            for (const key in children) {
                const child = children[key]
                if (child && dfs(i + 1, child)) {
                    return true
                }
            }
        }


        return false
    }

    return dfs(0, this.root)
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

const { runClass } = require('../libs/klass')
var actions = ["WordDictionary", "addWord", "addWord", "addWord", "search", "search", "search", "search"], params = [[], ["bad"], ["dad"], ["mad"], ["pad"], ["bad"], [".ad"], ["b.."]]
var ans = runClass(WordDictionary, actions, params)
