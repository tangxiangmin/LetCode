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
// 思路
var longestZigZag = function (root) {
    maxans = 0
    function dfs(o, direction, length) {
        if (!o) return
        maxans = Math.max(maxans, length)
        if (direction == 0) {
            dfs(o.left, 1, length + 1)
            dfs(o.right, 0, 1)
        }
        else {
            dfs(o.right, 0, length + 1)
            dfs(o.left, 1, 1)
        }
    }

    dfs(root, 0, 0)
    dfs(root, 1, 0)
    return maxans
};

// 这个会超时，但是思路好像没问题，可以优化一下
var longestZigZag = function (root) {
    if (!root) return 0
    function dfs(node, left, prevNum) {
        if (!node) return prevNum
        var ans = left ? dfs(node.left, false, prevNum + 1) : dfs(node.right, true, prevNum + 1)
        return Math.max(ans, longestZigZag(node.left) + 1, longestZigZag(node.right) + 1)

    }
    return Math.max(dfs(root, true, 0), dfs(root, false, 0)) - 1
}