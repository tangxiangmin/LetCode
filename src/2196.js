/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function (descriptions) {
    var nodeMap = {}
    var parentMap = {}
    var childrenMap = {}
    for (var desc of descriptions) {
        var [p, c, isLeft] = desc
        parentMap[c] = p
        if (!Array.isArray(childrenMap[p])) {
            childrenMap[p] = []
        }
        childrenMap[p].push([c, isLeft])
        if (!nodeMap[c]) {
            nodeMap[c] = new TreeNode(c)
        }
        if (!nodeMap[p]) {
            nodeMap[p] = new TreeNode(p)
        }
    }
    var root
    for (var val in nodeMap) {
        if (!parentMap[val]) {
            root = nodeMap[val]
            break
        }
    }
    function dfs(node) {
        if (!node) return
        var children = childrenMap[node.val]
        if (!Array.isArray(children)) return
        for (var child of children) {
            var [c, isLeft] = child
            node[isLeft ? 'left' : 'right'] = nodeMap[c]
            dfs(nodeMap[c])
        }
    }
    dfs(root)
    return root
};