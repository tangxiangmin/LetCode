/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {

    function dfs(node) {
        if (!node) return [null, null]
        var { left, right } = node
        var l = node
        var r = node
        if (left) {
            var [start, end] = dfs(left)
            l = start
            end.right = node
            node.left = end
        }
        if (right) {
            var [start, end] = dfs(right)
            node.right = start
            start.left = node
            r = end
        }
        return [l, r]

    }
    var [l, r] = dfs(root)
    if (l) {
        l.left = r
    }
    if (r) {
        r.right = l
    }
    return l
};