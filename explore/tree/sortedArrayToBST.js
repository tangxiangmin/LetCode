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
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var sortedArrayToBST = function(nums) {
    if (nums.length === 0) {
        return null;
    }
    var midIndex = Math.floor(nums.length / 2);
    var root = new TreeNode(nums[midIndex]);

    var l = nums.slice(0, midIndex);
    var r = nums.slice(midIndex + 1);

    root.left = sortedArrayToBST(l);
    root.right = sortedArrayToBST(r);
    return root;
};
