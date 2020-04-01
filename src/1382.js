/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 思路：先序遍历，然后重新构造
var balanceBST = function(root) {
    var ans = []
    preorder(root)

    return build(ans)

    function preorder(node){
        if(!node) return
        preorder(node.left)
        ans.push(node.val)
        preorder(node.right)
    }
    function build(arr){
        if(!arr.length) return null
        var mid = Math.floor(arr.length / 2)

        var root = new TreeNode(arr[mid])

        var left = build(arr.slice(0, mid))
        var right = build(arr.slice(mid+1))
        root.left =left
        root.right =right
        return root
    }
};