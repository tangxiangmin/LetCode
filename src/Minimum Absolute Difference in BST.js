/**
 * Created by admin on 2017/9/27.
 */
// 找到BST中的最小绝对值

// 思路：BST中序
var getMinimumDifference = function(root) {

    var tmp = {
        min: Number.MAX_VALUE,
        pre: - 1
    };

    function inorder(node, tmp) {
        if(node){
            inorder(node.left, tmp);
            if (tmp.pre !== -1){
                tmp.min = Math.min(tmp.min, node.val - tmp.pre);
            }
            tmp.pre = node.val;

            inorder(node.right, tmp);
        }
    }

    inorder(root, tmp);
    return tmp.min
};