/**
 * Created by admin on 2017/9/2.
 */
// 求二叉树的最小深度

var minDepth = function(root) {
    if(root == null){
        return 0;
    }
    let left = minDepth(root.left),
        right = minDepth(root.right);

    if (!left){
        return right + 1;
    }

    if (!right) {
        return left + 1;
    }

    return Math.min(left+1, right+1);

};