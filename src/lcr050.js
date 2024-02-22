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
 * @param {number} targetSum
 * @return {number}
 */
// 思路1，dfs，找到从根节点开始的符合条件的路径，然后递归左子树和右子树开始的路径，最后相加
var pathSum = function (root, targetSum) {
    if (!root) return 0
    var ans = 0
    function dfs(node, targetSum) {
        if (!node) return
        if (node.val === targetSum) {
            ans++
        }
        dfs(node.left, targetSum - node.val)
        dfs(node.right, targetSum - node.val)
    }
    dfs(root, targetSum)
    return ans + pathSum(root.left, targetSum) + pathSum(root.right, targetSum)
};
// 思路2 前缀和，只要主要curSum - targetSum 出现过，就说明存在这个路径
var pathSum = function (root, targetSum) {
    var map = {}
    function dfs(node, curSum) {
        if (!node) return 0
        var res = 0
        curSum += node.val
        if (map[curSum - targetSum]) {
            res += map[curSum - targetSum]
        }

        if (!map[curSum]) map[curSum] = 0
        map[curSum]++

        res += dfs(node.left, curSum)
        res += dfs(node.right, curSum)
        map[curSum]--
        return res
    }
    var ans = dfs(root, 0)
    return ans
}
const { createBinaryTree } = require('../libs/tree')
var root = [10, 5, -3, 3, 2, null, 11, 3, -2, null, 1], targetSum = 8
var ans = pathSum(createBinaryTree(root), targetSum)
console.log(ans)