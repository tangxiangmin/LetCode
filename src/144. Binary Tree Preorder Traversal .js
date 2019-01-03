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
var preorderTraversal = function (root) {

    function preorder(root, res) {
        if (!root) {
            return []
        }

        res.push(root.val)
        preorder(root.left, res);
        preorder(root.right, res);
    }

    let res = []
    preorder(root, res)
    return res
};