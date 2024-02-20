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
 * @return {TreeNode}
 */
// bfs
var reverseOddLevels = function (root) {
    var queue = [root]
    var deep = 0
    while (queue.length) {
        var len = queue.length
        if (deep % 2 === 1) {
            for (var i = 0, j = len - 1; i < j; ++i, --j) {
                var l = queue[i]
                var r = queue[j]
                var tmp = l.val
                l.val = r.val
                r.val = tmp
            }
        }
        for (var i = 0; i < len; ++i) {
            var node = queue.shift()
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        deep++
    }
    return root
};

const { createBinaryTree, flattenBinaryTree } = require('../libs/tree')
var ans = reverseOddLevels(createBinaryTree([2, 3, 5, 8, 13, 21, 34]))
console.log(flattenBinaryTree(ans)) // [2, 5, 3, 8, 13, 21, 34]