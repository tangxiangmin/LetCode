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
 */
var CBTInserter = function (root) {
    this.root = root
};

/** 
 * @param {number} val
 * @return {number}
 */
CBTInserter.prototype.insert = function (val) {
    var queue = [this.root]
    while (queue.length) {
        var len = queue.length
        for (var i = 0; i < len; ++i) {
            var node = queue.shift()
            if (!node.left) {
                node.left = new TreeNode(val)
                return node.val
            } else if (!node.right) {
                node.right = new TreeNode(val)
                return node.val
            }
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
    }

};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function () {
    return this.root
};

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(val)
 * var param_2 = obj.get_root()
 */