/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) return 0;
    var ans = 1;
    for (var child of root.children) {
        var deep = maxDepth(child) + 1;
        if (ans < deep) {
            ans = deep;
        }
    }
    return ans;
};
