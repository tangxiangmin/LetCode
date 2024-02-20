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
// 思路：对于每个节点，保存其节点数量和求和，则父节点数量等于左右子节点数量+1，父节点的平均值等于lsum +rsum+node.val
var averageOfSubtree = function (root) {
    var ans = 0
    function dfs(node) {
        if (!node) {
            return [0, 0]
        }
        var [lnum, lsum] = dfs(node.left)
        var [rnum, rsum] = dfs(node.right)
        var num = lnum + rnum + 1
        var sum = lsum + rsum + node.val
        if (Math.floor(sum / num) === node.val) {
            ans++
        }
        return [num, sum]
    }
    dfs(root)
    return ans
};