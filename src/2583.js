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
 * @param {number} k
 * @return {number}
 */
// bfs
// 插入数字的时候可以使用优先队列
var kthLargestLevelSum = function (root, k) {
    var queue = [root]
    var deep = 0
    var ans = []
    while (queue.length) {
        var len = queue.length
        var sum = 0
        for (var i = 0; i < len; ++i) {
            var node = queue.shift()
            sum += node.val
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        ans[deep] = sum
        deep++
    }
    if (ans.length < k) {
        return -1
    }

    ans.sort((a, b) => b - a)
    return ans[k - 1]
};

// todo 优先队列