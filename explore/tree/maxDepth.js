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
var maxDepth = function(root) {

    function preorder(node, deep) {
        if (!node) {
            return deep - 1;
        }
        var l = preorder(node.left, deep + 1);
        var r = preorder(node.right, deep + 1);
        return Math.max(l, r);
    }

    return preorder(root, 1);
};
