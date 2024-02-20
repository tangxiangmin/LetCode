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
 * @return {boolean}
 */
// bfs，每层判断
var isEvenOddTree = function (root) {
    var queue = [root]
    var deep = 0
    while (queue.length) {
        var len = queue.length
        for (var i = 0; i < len; ++i) {
            var node = queue[i]
            if (node.val % 2 === deep % 2) {
                return false
            }
            var next = queue[i + 1]
            if (next) {
                if (deep % 2 === 0 && next.val <= node.val) {
                    return false
                } else if (deep % 2 === 1 && next.val >= node.val) {
                    return false
                }
            }
        }
        for (var i = 0; i < len; ++i) {
            var node = queue.shift()
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
    }
    return true
};