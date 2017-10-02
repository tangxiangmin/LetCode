/**
 * Created by admin on 2017/10/2.
 */
// 给定一个升序的数组，将其转变成高度平衡的搜索树
// 平衡树，即平衡二叉树（Balanced Binary Tree），具有以下性质：它是一棵空树或它的左右两个子树的高度差的绝对值不超过1，并且左右两个子树都是一棵平衡二叉树。

//  思路： 需要实现平衡树，只需要找到升序数组的中间值即可

var sortedArrayToBST = function(nums) {
    var len = nums.length
    if (len === 0){
        return null;
    }

    if (len === 1){
        return new TreeNode(nums[len-1]);
    }

    var midIndex = Math.floor(len/2);
    var val = nums[midIndex],
        left = nums.slice(0, midIndex),
        right = nums.slice(midIndex+1, len);

    var root = new TreeNode(val);
    root.left = sortedArrayToBST(left);
    root.right = sortedArrayToBST(right);

    return root;
};