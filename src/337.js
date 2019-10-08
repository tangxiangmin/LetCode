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
// 看起来可以使用动态规划
// dp[root] = max(root, dp[left] + dp[right])
// 临界条件，叶子节点dp[leaf] = leaf
// 由于需要考虑相邻的节点不能连续偷盗，则需要标记，比较麻烦，可以换个思路
// 由于房间的关系是二叉树，则一次操作要么是根节点，要么是两个子节点，使用递归实现
var rob = function (root) {
    return Math.max(robRoot(root), robSub(root))
    // 偷盗根节点
    function robRoot(root) {
        if (!root) {
            return 0
        }
        var { val, left, right } = root
        return val + robSub(left) + robSub(right)
    }
    // 偷盗子节点
    function robSub(root) {
        if (!root) {
            return 0
        }
        var { val, left, right } = root
        return rob(left) + rob(right)
    }
}
