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
var BSTIterator = function(root) {
    var ans = [];

    function inorder(root) {
        if (!root) {
            return ans;
        }
        inorder(root.left);
        ans.push(root.val);
        inorder(root.right);
    }

    inorder(root);
    this.data = ans;
    this.currentIndex = -1
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    this.currentIndex++
    return this.data[this.currentIndex]
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.currentIndex < this.data.length - 1
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
