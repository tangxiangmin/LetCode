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
    if (root == p || root === q) return root

    var left = lowestCommonAncestor(root.left, p, q)
    var right = lowestCommonAncestor(root.right, p, q)
 
    if (!left && !right) return null // 左右子树不包含pq任何一个节点
    if (left && right) return root // 左右子树分别包含一个pq，则root就是最近的祖先节点
    if (!left) return right // 不在左子树中，那right就是最近的祖先节点
    return left // 不再右子树中，那left就是最近的祖先节点
};