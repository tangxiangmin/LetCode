/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) {
        return null;
    }
    var queue = [];
    queue.push(root);
    while (queue.length) {
        var len = queue.length;
        for (var i = 0; i < len; ++i) {
            var node = queue.shift();
            if (i + 1 < len) {
                node.next = queue[0];
            } else {
                node.next = null;
            }

            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }
    return root;
};
