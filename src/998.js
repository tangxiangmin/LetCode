/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
// 思路：附加值是在数组的最右边
var insertIntoMaxTree = function(root, val) {
    if (!root) return new TreeNode(val);

    // 直接添加在顶部
    if (root.val < val) {
        let head = new TreeNode(val);
        head.left = root;
        return head;
    }
    // 在右子树
    root.right = insertIntoMaxTree(root.right, val)
    return root
};
