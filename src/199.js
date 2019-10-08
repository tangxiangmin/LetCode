/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 思路:bfs，每次返回每层最右侧非null节点
var rightSideView = function (root) {
    if (!root) {
        return []
    }
    var queue = [root]
    var ans = []
    while (queue.length) {
        var len = queue.length
        ans.push(queue[len - 1].val)
        for (var i = 0; i < len; ++i) {
            var node = queue.shift()
            var { left, right } = node
            left && queue.push(left)
            right && queue.push(right)
        }
    }
    return ans
};