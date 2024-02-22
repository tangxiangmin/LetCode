/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 复习一下二叉搜索树，左子树的值都比根节点小，右子树的值都比根节点大
var isValidBST = function (root) {
    function dfs(node, min, max) {
        if (!node) return true
        if (node.val <= min || node.val >= max) return false
        return dfs(node.left, min, node.val) && dfs(node.right, node.val, max)
    }
    return dfs(root, -Infinity, Infinity)
};