/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var evaluateTree = function(root) {
    var {val,left, right} = root
    if(!left && !right) return val
    if(val === 2){
        return evaluateTree(left)  || evaluateTree(right)
    }else {
        return evaluateTree(left)  && evaluateTree(right)
    }
};