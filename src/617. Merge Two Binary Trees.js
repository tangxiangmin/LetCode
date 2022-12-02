/**
 * Created by admin on 2017/9/24.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 合并两个二叉树，合并规则为对应节点之和

var mergeTrees = function (t1, t2) {
    if (!t1) {
        return t2;
    }
    if (!t2) {
        return t1;
    }

    var res = new TreeNode(t1.val + t2.val);
    res.left = mergeTrees(t1.left, t2.left);
    res.right = mergeTrees(t1.right, t2.right);

    return res;
};

var mergeTrees = function (root1, root2) {
    if (!root1) {
        return root2;
    }
    if (!root2) {
        return root1;
    }
    var l = mergeTrees(root1.left, root2.left);
    var r = mergeTrees(root1.right, root2.right);
    return new TreeNode(root1.val + root2.val, l, r);
};
