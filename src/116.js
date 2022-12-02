/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
// 思路 bfs
var connect = function (root) {
    if (!root) return root;
    var queue = [root];
    while (queue.length) {
        var len = queue.length;
        for (var i = 0; i < len; ++i) {
            var node = queue.shift();
            node.next = i === len - 1 ? null : queue[0] || null;
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }
    return root;
};
