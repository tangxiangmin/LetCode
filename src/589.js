// n叉树的前序遍历

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    var res = [];
    function pre(root) {
        if (!root) {
            return;
        }
        res.push(root.val)
        root.children.forEach(subNode=>{
            pre(subNode);
        })
    }
    pre(root);
    return res
};
