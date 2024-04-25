/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
// 求公共前缀可以用字典树，js需要自己实现一下

class TrieNode {
    constructor() {
        this.children = {}

        this.a = false
        this.b = false

    }
    insert(word, group) {
        let node = this
        for (const ch of word) {
            const { children } = node
            if (!children[ch]) {
                children[ch] = new TrieNode()
            }
            node = children[ch]
            if (group === 1) {
                node.a = 1
            } else if (group === 2) {
                node.b = 1
            }
        }
    }
}
var longestCommonPrefix = function (arr1, arr2) {
    const root = new TrieNode()
    for (const num of arr1) {
        root.insert(num.toString(), 1)
    }
    for (const num of arr2) {
        root.insert(num.toString(), 2)
    }

    return dfs(root)
    function dfs(node) {
        const { children } = node
        let max = 0
        for (const key in children) {
            const child = children[key]
            if (child.a && child.b) {
                max = Math.max(dfs(child) + 1, max)
            }
        }
        return max

    }
};
var arr1 = [1, 10, 100], arr2 = [1000]
arr1 = [13, 27, 45], arr2 = [21, 27, 48]
var ans = longestCommonPrefix(arr1, arr2)
console.log(ans)