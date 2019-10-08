/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// 思路：实际上是广度遍历
var zigzagLevelOrder = function (root) {
    if (!root) {
        return []
    }
    var queue = [root]
    var ans = []
    while (queue.length) {
        var len = queue.length
        var row = []
        for (var i = 0; i < len; ++i) {
            var node = queue.shift()
            var { val, left, right } = node
            left && queue.push(left)
            right && queue.push(right)

            // 第一层从左向右， 第二层从右向左，依次类推
            if (ans.length % 2) {
                row.unshift(val)
            } else {
                row.push(val)
            }
        }
        ans.push(row)
    }
    return ans
};