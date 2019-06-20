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
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (!root) {
        return false;
    }

    var { left, right } = root;
    // 叶子节点的值等于sum，满足条件
    if (!left && !right) {
        return root.val === sum;
    }
    return hasPathSum(left, sum - root.val) || hasPathSum(right, sum - root.val);
};


