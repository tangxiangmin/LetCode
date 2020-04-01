/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var FindElements = function(root) {
    var values = []
    reset(root, 0)
    
    this.root = root
    this.values = values
    function reset(root, val) {
        if (!root) return null;
        root.val = val;
        values.push(val)

        const { left, right } = root;

        root.left = reset(left, val * 2 + 1);
        root.right = reset(right, val * 2 + 2);
    }
};

/**
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
    return this.values.includes(target)
};

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
