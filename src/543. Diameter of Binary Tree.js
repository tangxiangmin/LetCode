/**
 * Created by admin on 2017/4/16.
 */
// 计算二叉树的直径
// 指定指树中相距最远的两个节点的距离
// 思路是找到左子树和右子树最深的树叶然后相加
var diameterOfBinaryTree = function(root) {
    var max = 0;
    function getDeep(root) {
        if (root === null){
            return -1;
        }
        var left = getDeep(root.left),
            right = getDeep(root.right);

        var tmp = left + right + 2;

        if (tmp > max) {
            max = tmp;
        }

        // 只返回较大的那个子树的深度
        return Math.max(left, right) + 1;
    }
    getDeep(root);

    return max;
};