/**
 * Created by admin on 2017/4/16.
 */
// 计算二叉树的直径
// 指定指树中相距最远的两个节点的距离
// 思路是找到左子树和右子树最深的树叶然后相加
var diameterOfBinaryTree = function (root) {
    var max = 0;
    function getDeep(root) {
        if (root === null) {
            return -1;
        }
        var left = getDeep(root.left),
            right = getDeep(root.right);

        var tmp = left + right + 2;

        if (tmp > max) {
            max = tmp;
        }

        // 只返回较大的那个子树的深度
        return Math.max(left, right) + 1;
    }
    getDeep(root);

    return max;
};

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
var diameterOfBinaryTree = function (root) {
    var ans = 0
    function dfs(node) {
        if (!node) return 0
        var l = dfs(node.left)
        var r = dfs(node.right)
        var res = l + r
        if (res > ans) {
            ans = res
        }
        return Math.max(l, r) + 1
    }
    dfs(root)
    return ans
};