/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
// 中序遍历时，先找到节点p，记录一下，然后返回下一个会出现的值
var inorderSuccessor = function (root, p) {
    var flag = false
    var target = null
    function dfs(node) {
        if (!node) return
        dfs(node.left)
        if (target) return
        if (node.val === p.val) {
            flag = true
        } else if (flag) {
            target = node
            return
        }
        dfs(node.right)
    }
    dfs(root)
    return target
};

// 这道题是二分搜索树，可以二分一下
var inorderSuccessor = function (root, p) {
    let successor = null;
    if (p.right) {
        successor = p.right;
        while (successor.left) {
            successor = successor.left;
        }
        return successor;
    }
    let node = root;
    while (node) {
        if (node.val > p.val) {
            successor = node;
            node = node.left;
        } else {
            node = node.right;
        }
    }
    return successor;

}

var { createBinaryTree } = require('../libs/tree')
var root = [2, 1, 3], p = 1
var node = createBinaryTree(root)
var ans = inorderSuccessor(node, node.left)
console.log(ans)
