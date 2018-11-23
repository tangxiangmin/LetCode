// 对一棵树进行重排序
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
var increasingBST = function (root) {
    function inOrder(root, res) {
        if(root.left){
            inOrder(roo.left, res)
        }
        res.push(root)
        if(root.right){
            inOrder(roo.right, res);
        }
    } 
    let allVal = []
    inOrder(root, allVal)
    for(let i = 0; i < allVal.length-1; ++i){
        allVal[i].right = allVal[i + 1];
    }
    return allVal[0];
};