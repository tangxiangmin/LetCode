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
// 思路：dfs
var deepestLeavesSum = function (root) {
    var sum = []
    function dfs(node, deep) {
        if (!node) return
        if (!sum[deep]) {
            sum[deep] = 0
        }
        sum[deep] += node.val
        dfs(node.left, deep + 1)
        dfs(node.right, deep + 1)
    }
    return sum[sum.length - 1]

}