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
var isCompleteTree = function (root) {

    var queue = [root]
    var deep = 0
    var lastQueue = []
    while (queue.length) {
        var len = queue.length
        var nextQueue = []
        for (var i = 0; i < len; ++i) {
            var node = queue[i]
            node.left && nextQueue.push(node.left)
            node.right && nextQueue.push(node.right)
        }
        // 当前不是最后一层，则本层节点数量需要满足 2^n
        if (nextQueue.length) {
            if (len !== Math.pow(2, deep)) {
                return false
            } else {
                deep++
                lastQueue = queue
                queue = nextQueue
                continue
            }
        }
        // 最后一层，判断节点是否都靠左边
        var hasEmpty = false
        for (var i = 0; i < lastQueue.length; ++i) {
            var node = lastQueue[i]
            if (!node.left && node.right) {
                return false
            }
            if (hasEmpty && (node.left || node.right)) {
                return false
            }
            if (!node.left || !node.right) {
                hasEmpty = true
            }
        }
        queue = nextQueue
    }
    return true
};