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
// 思路，使用队列保存那些还没有补全的节点，然后只需要O(1)就可以完成插入操作，在节点有左右子节点之后，出队列
var CBTInserter = function (root) {
    this.candidate = [];
    this.root = root;

    const queue = [];
    queue.push(root);

    while (queue.length) {
        const node = queue.shift();
        if (node.left) {
            queue.push(node.left);
        }
        if (node.right) {
            queue.push(node.right);
        }
        if (!(node.left && node.right)) {
            this.candidate.push(node);
        }
    }
};

CBTInserter.prototype.insert = function (val) {
    const child = new TreeNode(val);
    const node = this.candidate[0];
    let ret = node.val;
    if (!node.left) {
        node.left = child;
    } else {
        node.right = child;
        this.candidate.shift();
    }
    this.candidate.push(child);
    return ret;
};

CBTInserter.prototype.get_root = function () {
    return this.root;
};
