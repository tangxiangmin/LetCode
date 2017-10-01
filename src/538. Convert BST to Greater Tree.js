/**
 * Created by admin on 2017/9/27.
 */
// 给定一个二叉搜索树，修改每个节点的值为：初始值 + 树中所有比他大的值之和，返回新树
    // 思路：根据二叉搜索树中序遍历，可获得从大到小的节点数组，使用一个对象来保存已经相加的结果

var convertBST = function(root) {

    function inorder(node, tmp) {
        if (node){
            inorder(node.right, tmp); // 从大到小
            node.val += tmp.sum;
            tmp.sum = node.val;
            inorder(node.left, tmp);
        }
    }
    var tmp = {
        sum: 0,
    }
    inorder(root, tmp);

    return root;
};
