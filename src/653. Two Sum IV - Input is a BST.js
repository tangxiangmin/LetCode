/**
 * Created by admin on 2017/9/27.
 */
// 给定一个二叉排序树和一个目标值，判断是否存在两个节点之和等于目标值
// 思路：结合二叉排序树的特性，中遍历所有节点，得到一个有序数组，然后二分查找
    
var findTarget = function(root, k) {

    var nodes = [];
    function inorder(node) {
        if (node){
            inorder(node.left);
            nodes.push(node.val);
            inorder(node.right);
        }
    }
    inorder(root);
    for (var i = 0, j = nodes.length - 1; i < j; ){
        var sum = nodes[i] + nodes[j];
        if (sum == k){
            return true;
        }else if(sum < k){
            i++;
        }else {
            j--;
        }
    }
    return false;
};