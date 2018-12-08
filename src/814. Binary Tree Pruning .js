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
var pruneTree = function (root) {
    if(!root){
        return null
    }

    // 查询子节点中是否存在1
    function findNum_1(node){
        let hashOne = false
        function find(node){
            if(!node){
                return
            }
            if(node.val === 1){
                hashOne = true
                return
            }else {
                find(node.left);
                find(node.right)
            }
        }
        find(node)
        return hashOne
    }

    if (root.left && root.left.val === 0){
        if (!findNum_1(root.left)) {
            root.left = null
        }
    }
    if(root.right && root.right.val === 0){
        if (!findNum_1(root.right)) {
            root.right = null;
        }
    }

    if (!root.left && !root.right) {
        root = null
    }else {
        pruneTree(root.left);
        pruneTree(root.right);
    }
    return root
};