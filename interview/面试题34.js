/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
// 思路：从根节点到叶子节点，dfs
var pathSum = function(root, sum) {
    var ans = [];
    dfs(root, sum, [])
    return ans
    function dfs(node, sum, arr) {
        if (!node) return;
        const { left, right, val } = node;
        if (!left && !right && val === sum) {
            ans.push([...arr, val]);
            return;
        }
        dfs(left, sum - val, [...arr, val]);
        dfs(right, sum - val, [...arr, val]);
    }
};
