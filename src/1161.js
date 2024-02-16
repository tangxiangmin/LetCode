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
// 思路：层级遍历就用bfs
var maxLevelSum = function (root) {
    var queue = [root]
    var deep = 1
    var max = -Infinity
    var ans = 0
    while (queue.length) {
        var len = queue.length
        var sum = 0
        for (var i = 0; i < len; ++i) {
            var node = queue.shift()
            sum += node.val
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        if (sum > max) {
            max = sum
            ans = deep
        }
        deep++
    }
    return ans
};

// 思路2：也可以使用dfs，使用一个数组保存每一层的和，然后返回最大值
var maxLevelSum = function (root) {
    var sum = []
    function dfs(node, deep) {
        if (!node) return
        if (!sum[deep]) {
            sum[deep] = 0
        }
        sum[deep] += node.val
        dfs(node.left, deep + 1)
        dfs(node.right, deep + 1)
    }
    dfs(root, 0)
    var maxIndex = 0
    for (var i = 0; i < sum.length; ++i) {
        if (sum[i] > sum[maxIndex]) {
            maxIndex = i
        }
    }
    return maxIndex + 1
}