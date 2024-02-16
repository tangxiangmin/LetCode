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
// 思路：每个子树与外界连接的边上面，要经过的步骤是子树的 节点数-硬币数 的绝对值（硬币少了则进入，硬币多了则出去）
var distributeCoins = function (root) {

    var ans = 0
    function dfs(node) {
        if (!node) return {
            nodes: 0,
            coins: 0
        }
        var left = dfs(node.left)
        var right = dfs(node.right)
        var res = {
            nodes: left.nodes + right.nodes + 1,
            coins: left.coins + right.coins + node.val
        }
        ans += Math.abs(res.nodes - res.coins)

        return res
    }
    dfs(root)
    return ans
};