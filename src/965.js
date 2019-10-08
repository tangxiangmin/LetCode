/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 思路：左右节点值与根节点相同，递归
var isUnivalTree = function (root) {
    if (!root) {
        return true
    }

    let { val, left, right } = root
    let flag = true
    if (left) {
        flag = flag && left.val === val
    }
    if (right) {
        flag = flag && right.val === val
    }

    return flag && isUnivalTree(left) && isUnivalTree(right)
};