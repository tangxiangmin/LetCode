/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 思路：求所有路径的组合
var sumNumbers = function (root) {
    if(!root){
        return 0
    }
    var total = 0
    dfs(root, '')
    return total
    function dfs(node, sum) {
        let { val, left, right } = node
        sum += val
        left && dfs(left, sum)
        right && dfs(right, sum)

        if (!left && !right) {
            total += parseInt(sum)
        }
    }
};