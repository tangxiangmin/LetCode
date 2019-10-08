/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
// 思路，需要找到某一层的所有节点，因此使用bfs
var addOneRow = function (root, v, d) {
    if (d == 1) {
        var head = new TreeNode(v)
        head.left = root
        return head
    }
    var queue = [root]
    while (queue.length && --d > 1) {
        var len = queue.length
        for (var i = 0; i < len; ++i) {
            var { left, right } = queue.shift()
            left && queue.push(left)
            right && queue.push(right)
        }
    }
    // d===1此时需要调整queue中每个节点的左右子节点为v
    queue.forEach(node => {
        var { left, right } = node
        node.left = new TreeNode(v)
        node.right = new TreeNode(v)
        node.left.left = left
        node.right.right = right
    })
    return root
};