/**
 * Created by admin on 2017/10/7.
 */
// 判断二叉树是否高度平衡
// 思路：递归判断所有子树是否平衡
var isBalanced = function (root) {
    function getDeep(node) {
        if (!node) {
            return 0;
        }
        return Math.max(getDeep(node.left), getDeep(node.right)) + 1;
    }

    if (!root) {
        return true
    }
    var l = getDeep(root.left);
    var r = getDeep(root.right);
    return Math.abs(l - r) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};