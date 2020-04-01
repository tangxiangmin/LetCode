/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

// 思路：BST的左子树所有节点值均小于root.val，右子树所有节点值均大于root.val
// 因此先序遍历，找到需要交换的两个节点，更改他们的值即可
var recoverTree = function(root) {
    var arr = []
    inorder(root)

    var l = 0
    var r = arr.length-1

    while(arr[l].val < arr[l+1].val){
        l++
    }
    while(arr[r].val > arr[r-1].val){
        r--
    }
    var tmp = arr[l].val
    arr[l].val = arr[r].val
    arr[r].val = tmp
    return root

    function inorder(node){
        if(!node) return
        
        inorder(node.left)
        arr.push(node)
        inorder(node.right)
    }

};
