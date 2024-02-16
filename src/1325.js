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
 * @param {number} target
 * @return {TreeNode}
 */
// 思路：持续删除叶子节点，看起来应该是个后序遍历
var removeLeafNodes = function (root, target) {

    function dfs(node) {
        if (!node) return null
        node.left = dfs(node.left)
        node.right = dfs(node.right)

        if (!node.left && !node.right && node.val === target) {
            return null
        }
        return node

    }
    return dfs(root)

};