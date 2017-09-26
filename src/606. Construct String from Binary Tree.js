/**
 * Created by admin on 2017/9/27.
 */
// 将二叉树转换成字符串
// 思路：树先序遍历
var tree2str = function(t) {
    var res = "";
    function preOrder(node) {
        if(node){
            res += node.val;

            if(node.left){
                res += '(';
                preOrder(node.left);
                res += ')';
            }

            if(node.right){
                if (!node.left){
                    res += '()';
                }
                res += '(';
                preOrder(node.right);
                res += ')';
            }

        }
    }

    preOrder(t);

    return res;

};