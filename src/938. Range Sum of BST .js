
// 10
// 7  15
// 3 5 null 18

// 10, 5, 15, 3, 7, 13, 18, 1, null, 6

// 10
// 7 13
// 6 5 15 18
// 3 null
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function (root, L, R) {
    let sum = 0
    function dfs(nodex, L, R){
        if(!node){
            return 0
        }
        if (L <= node.val && node.val <= R)
            sum += node.val;
        if (L < node.val)
            dfs(node.left, L, R);
        if (node.val < R)
            dfs(node.right, L, R);
    }
    dfs(root, L, R)
    return sum
};