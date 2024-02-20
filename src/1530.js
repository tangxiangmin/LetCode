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
 * @param {number} distance
 * @return {number}
 */
// 看起来好像是找两个叶子节点的最近公共父节点
// 对于每个节点，使用一个 depths 数组来保存距离他为i的叶子节点数量
// 这样，对于某个节点而言，符合题目要求的叶子节点对，就是距离他左节点i、右节点为j的节点数量组合，满足i+j+2(2是需要两个子节点经过该节点的路径)<=distance
var countPairs = function (root, distance) {

    function dfs(node) {
        var depths = new Array(distance + 1).fill(0)
        var leaf = !node.left && !node.right
        if (leaf) {
            depths[0] = 1
            return [depths, 0]
        }
        var leftDepths = new Array(distance + 1).fill(0)
        var leftCount = 0
        var rightDepths = new Array(distance + 1).fill(0)
        var rightCount = 0

        if (node.left) {
            ans = dfs(node.left)
            leftDepths = ans[0]
            leftCount = ans[1]
        }
        if (node.right) {
            ans = dfs(node.right)
            rightDepths = ans[0]
            rightCount = ans[1]
        }
        for (var i = 0; i < distance; ++i) {
            depths[i + 1] += leftDepths[i]
            depths[i + 1] += rightDepths[i]
        }
        var ans = 0
        for (var i = 0; i <= distance; ++i) {
            for (var j = 0; j + i + 2 <= distance; j++) {
                ans += (leftDepths[i] * rightDepths[j]);
            }
        }
        return [depths, ans + leftCount + rightCount]
    }
    var [_, ans] = dfs(root)
    return ans
};