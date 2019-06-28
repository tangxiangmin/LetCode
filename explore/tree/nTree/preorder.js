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
    function preorder(root) {
        if (!root) {
            return;
        }
        res.push(root.val);
        root.children.forEach(subNode => {
            preorder(subNode);
        });
    }
    preorder(root);
    return res;
};
