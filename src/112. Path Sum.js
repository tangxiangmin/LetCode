/**
 * Created by admin on 2017/8/6.
 */
// 给一颗二叉树判断是否存在从根到叶其和等于给定值
// 思路：递归，查询树的路径
var hasPathSum = function(root, sum) {
    if (!root) return false;

    sum -= root.val;

    if (sum === 0 && !root.left && !root.right){
        return true;
    }else {
        return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
    }
};