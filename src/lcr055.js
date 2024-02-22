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
var BSTIterator = function (root) {

    var arr = []
    function dfs(node) {
        if (!node) return
        dfs(node.left)
        arr.push(node.val)
        dfs(node.right)
    }
    dfs(root)
    this.arr = arr
    this.currenteIndex = -1
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
    this.currenteIndex++
    return this.arr[this.currenteIndex]
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
    return this.currenteIndex < this.arr.length

};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */