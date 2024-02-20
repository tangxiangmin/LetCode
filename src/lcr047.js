/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function (root) {

    // 可以删除的子树则返回true
    function dfs(node) {
        if (!node) return true
        var l = dfs(node.left)
        var r = dfs(node.right)
        if (l) {
            node.left = null
        }
        if (r) {
            node.right = null
        }

        if (l && r && node.val === 0) {
            return true
        }
        return false
    }
    var ans = dfs(root)
    return ans ? null : root

};