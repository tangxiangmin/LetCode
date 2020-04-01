/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
// dfs，
var smallestFromLeaf = function(root) {
    if(!root) return ''
    var ans = [];

    dfs(root, "");

    return ans.sort()[0]

    function dfs(node, str) {
        if (!node) return str;
        const { left, right } = node;
        let ch = getChar(node.val);
        str = ch + str;
        if (!left && !right) {
            ans.push(str);
        } else {
            left && dfs(left, str);
            right && dfs(right, str);
        }
    }
    function getChar(num) {
        let start = "a".charCodeAt(0);
        return String.fromCharCode(start + num);
    }
};
