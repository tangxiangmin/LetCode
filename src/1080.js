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
 * @param {number} limit
 * @return {TreeNode}
 */
// 思路，找到一条最大和的路径，如果还比limit小就删除
var sufficientSubset = function (root, limit) {
    function dfs(node, preSum) {
        if (!node) return -Infinity
        preSum += node.val
        if (!node.left && !node.right) {
            node.max = preSum
            return preSum
        }

        var l = dfs(node.left, preSum)
        var r = dfs(node.right, preSum)
        var max = Math.max(l, r)
        node.max = max

        return max
    }
    function trim(node) {
        if (!node) return
        if (node.left && node.left.max < limit) {
            node.left = null
        }
        if (node.right && node.right.max < limit) {
            node.right = null
        }
        trim(node.left)
        trim(node.right)
    }

    dfs(root, 0)
    trim(root)

    return root.max < limit ? null : root
};