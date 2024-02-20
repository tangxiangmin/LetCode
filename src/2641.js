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
// 思路，看起来是bfs求每一层的sum，然后需要修改的结果为 sum - 兄弟节点的值 - 自己的值
var replaceValueInTree = function (root) {
    var queue = [root]
    var nextSum = root.val
    while (queue.length) {
        var len = queue.length
        var nextQueue = []
        var sum = 0
        for (var i = 0; i < len; ++i) {
            var node = queue[i]
            node.val = nextSum - node.val
            var left = 0
            var right = 0
            if (node.left) {
                left = node.left.val
                sum += left
                nextQueue.push(node.left)
            }
            if (node.right) {
                right = node.right.val
                sum += right
                node.right.val += left
                nextQueue.push(node.right)
            }
            if (node.left) {
                node.left.val += right
            }
        }
        nextSum = sum
        queue = nextQueue
    }
    return root
};
var root = [5, 4, 9, 1, 10, null, 7]
root = [3,1,2]
const { createBinaryTree, flattenBinaryTree } = require('../libs/tree')
var ans = replaceValueInTree(createBinaryTree(root))
console.log(flattenBinaryTree(ans))
