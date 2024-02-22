/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 思路，因为是二叉搜索树，大于当前节点的值有右子树，父节点，父节点的右子树
// 需要先操作子树，因此用后序遍历，但是要控制一下顺序，先遍历右子树
var convertBST = function (root) {

    var preSum = 0
    function dfs(node) {
        if (!node) return 0
        dfs(node.right)
        node.val += preSum
        preSum = node.val
        dfs(node.left)
    }
    dfs(root)
    return root
};