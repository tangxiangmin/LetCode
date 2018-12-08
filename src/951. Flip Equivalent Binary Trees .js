/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function (root1, root2) {
    if (root1 !== root2){
        return false
    }

    function swap(node){
        let left = node.left
        node.left = node.right
        node.right = left
    }
    if(root1 && root2){
        
        if (root1.left === root2.right && root1.right === root2.left) {
            swap(root2)
        }
        return flipEquiv()
    }
};