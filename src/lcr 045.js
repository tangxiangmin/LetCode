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
 * @return {number}
 */
// 思路：先序遍历，找到最深的那个节点
var findBottomLeftValue = function (root) {
    var maxDeep = -1
    var ans = root
    function dfs(node, h) {
        if (!node) return
        if (h > maxDeep) {
            ans = node
            maxDeep = h
        }
        dfs(node.left, h + 1)
        dfs(node.right, h + 1)
    }
    dfs(root, 0)
    return ans
};