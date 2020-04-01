/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

// 思路，由于是BST，要找到第k大的值
var kthLargest = function(root, k) {
    var arr = inorder(root, [])

    return arr[arr.length - k]

    function inorder(node, arr){
        if(!node) return arr
        const{left, right,val}= node
        inorder(left, arr)
        arr.push(val)
        inorder(right, arr)
        return arr
    }
};
