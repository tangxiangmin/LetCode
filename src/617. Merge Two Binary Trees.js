/**
 * Created by admin on 2017/9/24.
 */
// 合并两个二叉树，合并规则为对应节点之和

var mergeTrees = function(t1, t2) {
    if (!t1){
        return t2;
    }
    if (!t2){
        return t1;
    }

    var res = new TreeNode(t1.val + t2.val);
    res.left = mergeTrees(t1.left, t2.left);
    res.right = mergeTrees(t1.right, t2.right);

    return res;
};