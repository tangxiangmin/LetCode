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
// 思路：递归
var isSymmetric = function(root) {
    if(!root) return true
    return check(root.left, root.right)

    function check(node1, node2) {
        if (!node1 && !node2) return true;
        if (!node1 || !node2) return false;
        if (node1.val !== node2.val) return false;

        return check(node1.left, node2.right) && check(node1.right, node2.left);
    }
};
