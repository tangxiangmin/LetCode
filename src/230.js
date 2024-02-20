/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let ans = []

    preorder(root)
    // 二叉搜索树
    return ans[ans.length - k]

    function preorder(node) {
        if (!node) {
            return
        }
        preorder(node.left)
        ans.push(node)
        preorder(node.right)
    }

};
