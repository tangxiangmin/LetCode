/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 思路：求节点个数，可以直接遍历一次树
// 由于本题的树是完全二叉树，则只需要知道层级和最后一层的个数，就可以推算出节点的个数
var countNodes = function (root) {
    if (!root) {
        return 0
    }
    var l = getDeep(root.left)
    var r = getDeep(root.right)
    if (l === r) {
        // 1<<l 实际上是求解2^l，移位运算更快
        return countNodes(root.right) + (1 << l)
    } else {
        return countNodes(root.left) + (1 << r);
    }
    function getDeep(root) {
        let deep = 0
        while (root) {
            deep++
            root = root.left
        }
        return deep
    }
};