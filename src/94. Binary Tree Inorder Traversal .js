/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let res = []
    function inorder(root) {
        if (!root) {
            return
        }
        inorder(root.left)
        res.push(root.val)
        inorder(root.right)
    }
    inorder(root)
    return res
};
var inorderTraversal = function (root) {
    function inorder(node) {
        if (!node) return []
        var l = inorder(node.left)
        var r = inorder(node.right)
        return [...l, node, ...r]
    }
    return inorder(root)
}