// 判断两个二叉树的叶子节点值顺序是否一致

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
var leafSimilar = function (root1, root2) {
    function getLeafSequence(root, res){
        if (!root.left && !root.right) {
            res.push(root.val);
            return
        }

        if(root.left){
            getLeafSequence(root.left, res);
        }
        if(root.right){
            getLeafSequence(root.right, res);
        }

    }

    let res1 = []
    let res2 = []
    getLeafSequence(root1, res1)
    getLeafSequence(root2, res2)
    for(let i = 0; i < res1.length; ++i){
        if(res1[i] !== res2[i]){
            return false
        }
    }
    return true
};