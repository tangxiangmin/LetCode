/**
 * Created by admin on 2017/4/10.
 */
var sumOfLeftLeaves = function(root) {
    if (!root) {
        return 0;
    }

    var sum = 0;
    var l = root.left,
        r = root.right;

    // 递归
    // 如果左节点存在且为叶子，则返回叶子的值与右子树左节点之和
    // 如果左节点存在且不为叶子节点，则返回左子树和右子树的左节点之和
    // 如果左节点不存在，则返回右子树做节点之和
    if (l) {
        if (!l.left && !l.right) {
            return l.val + sumOfLeftLeaves(r);
        } else {
            return sumOfLeftLeaves(l) + sumOfLeftLeaves(r);
        }
    }else {
        return sumOfLeftLeaves(r);
    }
};