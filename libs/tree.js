// 模拟letcode的二叉树测试用例


class BinaryTreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function createBinaryTree(list) {
    var root = new BinaryTreeNode(list[0])
    var queue = [root]
    var idx = 1

    while (queue.length && idx < list.length) {
        var len = queue.length
        for (var i = 0; i < len; ++i) {
            var node = queue.shift()
            if (idx >= list.length) break

            var left = list[idx++]
            node.left = left === null ? null : new BinaryTreeNode(left)
            if (node.left) {
                queue.push(node.left)
            }

            if (idx >= list.length) break
            var right = list[idx++]
            node.right = right === null ? null : new BinaryTreeNode(right)
            if (node.right) {
                queue.push(node.right)
            }
        }
    }
    return root
}
function flattenBinaryTree(root) {
    var queue = [root]
    var ans = []
    while (queue.length) {
        var len = queue.length
        for (var i = 0; i < len; ++i) {
            var node = queue.shift()
            ans.push(node.val)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
    }
    return ans

}

module.exports = {
    BinaryTreeNode,
    createBinaryTree,
    flattenBinaryTree
}

