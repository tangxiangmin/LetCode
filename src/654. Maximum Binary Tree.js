// 给定一个数组，求该数组可组成的最大值二叉树，定义为
// 根节点最大，左侧树由数组最大值左侧的子数组组成，右侧树为数组最大值右侧的子数组组成
// 数组元素不重复

// 思路，递归
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    if (!nums.length){
        return null
    }
    var max = Math.max.apply(null, nums);
    var maxIndex = nums.indexOf(max);

    var head = new TreeNode(max);

    head.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
    head.right = constructMaximumBinaryTree(nums.slice(maxIndex+1));

    return head
};
