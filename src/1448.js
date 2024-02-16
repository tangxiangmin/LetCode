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
 * @return {number}
 */
// 只递不归
var goodNodes = function (root) {
    var ans = 0
    function dfs(node, max) {
        if (!node) return
        if (node.val >= max) {
            ans++
            max = node.val
        }
        dfs(node.left, max)
        dfs(node.right, max)
    }
    dfs(root, -Infinity)
    return ans
};