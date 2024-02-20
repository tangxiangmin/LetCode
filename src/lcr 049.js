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
// 将路径组成的数字传到递归函数中
var sumNumbers = function (root) {
    var ans = 0
    function dfs(node, path) {
        if (!node) return
        path += node.val
        if (!node.left && !node.right) {
            console.log(path)
            ans += +path
            return
        }
        dfs(node.left, path)
        dfs(node.right, path)
    }
    dfs(root, '')
    return ans
};