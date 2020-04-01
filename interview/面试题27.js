/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
    if (!root) return null;
    var tmp = root.right
    root.right = root.left
    root.left = tmp
    mirrorTree(root.left)
    mirrorTree(root.right)
    return root
};
