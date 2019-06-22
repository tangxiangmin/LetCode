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
var isBalanced = function(root) {
    if (!root) {
        return true;
    }

    var l = treeDeep(root.left, 0);
    var r = treeDeep(root.right, 0);

    if (Math.abs(l - r) <= 1) {
        return isBalanced(root.left) && isBalanced(root.right);
    }
    return false;

    function treeDeep(root, deep) {
        if (!root) {
            return deep;
        }
        var l = treeDeep(root.left, deep + 1);
        var r = treeDeep(root.right, deep + 1);
        return Math.max(l, r);
    }
};
