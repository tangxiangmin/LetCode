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
 * @return {number}
 */
// 递归，把祖父节点传进去
var sumEvenGrandparent = function (root) {
    var ans = 0
    function dfs(node) {
        if (!node) return
        if (node.parent && node.parent.parent && node.parent.parent.val % 2 === 0) {
            ans += node.val
        }
        if (node.left) {
            node.left.parent = node
        }
        if (node.right) {
            node.right.parent = node
        }
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    return ans
};

// 在第一层上面再模拟两层节点为1（不为偶数）的节点，这样就可以将值传入进行递归
var sumEvenGrandparent = function (root) {
    var ans = 0
    function dfs(gp, p, node) {
        if (!node) return
        if (gp % 2 === 0) {
            ans += node.val
        }
        dfs(p, node.val, node.left)
        dfs(p, node.val, node.right)

    }
    dfs(1, 1, root)
    return ans
}