/**
 * Created by admin on 2017/10/2.
 */
// 给定一个特定的二叉树，每个节点包含0或2个节点，如果包含2个子节点，则该节点的值为子节点值较小的的那个值，
// 找到该二叉树中节点值第二小的值，如果没有，返回-1

// 思路： 遍历节点，找到第二小的值
// 这个二叉树的结构很特殊，找到所有右节点中第一个大于根节点的值即可，算法应该可以优化
var findSecondMinimumValue = function(root) {
    if (!root || !root.left){
        return -1;
    }
    // var max = Math.max(root.left.val, root.right.val);
    //
    // if (max !== root.val){
    //     return max;
    // }else {
    //     var res = findSecondMinimumValue(root.left);
    //     if (res === -1){
    //         return findSecondMinimumValue(root.right);
    //     }else {
    //         return res;
    //     }
    // }

    var arr = [];
    function inorder(node) {
        if (node){
            arr.push(node.val);
            inorder(node.left);
            inorder(node.right);
        }
    }
    inorder(root)

    var min = Number.MAX_VALUE;
    for (var i = 0; i < arr.length; ++i){
        if (arr[i] < min && arr[i] !== root.val){
            min = arr[i];
        }
    }
    return min == Number.MAX_VALUE ? -1 : min

};