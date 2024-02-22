/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if (!root) return null
    if (root === p || root === q) return root
    var left = lowestCommonAncestor(root.left, p, q)
    var right = lowestCommonAncestor(root.right, p, q)
    if (!left && !right) return null // 左右子树不包含任何一个节点
    if (left && right) return root // 有一个在左边，有一个在右边
    if (!left) {
        return right
    }
    return left
};