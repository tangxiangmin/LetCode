/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
 // https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof/
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};