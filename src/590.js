// N叉树的后序遍历
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
var postorder = function(root) {

    var res = [];
    function post(root) {
        if (!root) {
            return;
        }
        root.children.forEach(subNode => {
            pre(subNode);
        });
        res.push(root.val);
    }
  
    post(root);
    return res;
};