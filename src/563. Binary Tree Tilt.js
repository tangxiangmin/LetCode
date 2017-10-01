/**
 * Created by admin on 2017/10/1.
 */
// 获取二叉树的tilt
// tilt值定义为所有节点的左右树子节点之和的差的绝对值相加
// 思考： 递归两次，一次统计子树的总和，一次几次tilt值
var findTilt = function(root) {
    if (!root){
        return 0;
    }

    function subTotal(node) {
        if (!node){
            return 0;
        }

        var sum = node.val;
        sum += subTotal(node.left);
        sum += subTotal(node.right);

        return sum;
    }

    var l = subTotal(root.left),
        r = subTotal(root.right);

    var sum = Math.abs(l - r);

    sum += findTilt(root.left);
    sum += findTilt(root.right);

    return sum;
};