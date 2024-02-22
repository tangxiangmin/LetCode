/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var numColor = function (root) {
    var map = {}
    function dfs(node) {
        if (!node) return
        map[node.val] = 1
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    return Object.keys(map).length

};