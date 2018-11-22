// 在二叉树中搜索对应节点，返回该节点为根节点的子树

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
    function subTree(node) {
        if(!node){
            return null
        }
        let root = new TreeNode(node.val);
        root.left = subTree(node.left)
        root.right = subTree(node.right)
        return root
    }

    if(!root){
        return null
    }

    if(root.val === val){
        return root
        // return subTree(root)
    }else if(root.val < val){
        return searchBST(root.right, val);
    }else if(root.val > val){
        return searchBST(root.left, val);
    }
};