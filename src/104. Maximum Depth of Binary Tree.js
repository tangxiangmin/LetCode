/**
 * Created by admin on 2017/4/6.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
var maxDepth = function (root) {

    if (root === null) {
        return 0;
    }

    if (root.left === null && root.right === null) {
        return 1;
    }

    var leftDepth = maxDepth(root.left);
    var rightDepth = maxDepth(root.right);
    return leftDepth > rightDepth ? leftDepth + 1 : rightDepth + 1;
};

var maxDepth = function (root) {
    function dfs(node) {
        if (!node) return 0
        var l = dfs(node.left)
        var r = dfs(node.right)
        return Math.max(l, r) + 1
    }
    return dfs(root)
}
