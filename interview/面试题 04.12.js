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
 * @return {number}
 */
var pathSum = function(root, sum) {
    if (!root) return 0;
    var ans = [];
    dfs(root, sum, []);

    var l = pathSum(root.left, sum);
    var r = pathSum(root.right, sum);

    return ans.length + l + r;

    function dfs(node, sum, arr) {
        if (!node) return;
        const { left, right, val } = node;
        if (val === sum) {
            ans.push([...arr, val]);
        }
        dfs(left, sum - val, [...arr, val]);
        dfs(right, sum - val, [...arr, val]);
    }
};
