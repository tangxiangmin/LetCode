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
var lowestCommonAncestor = function(root, p, q) {
    if (!root) {
        return null;
    }
    // 保证p是小值
    if (p.val > q.val) {
        var tmp = p;
        p = q;
        q = tmp;
    }
    if (p.val <= root.val && q.val >= root.val) {
        return root;
    } else if (q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    } else {
        return lowestCommonAncestor(root.right, p, q);
    }
};
