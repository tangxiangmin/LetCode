/**
 * 2019/6/19 下午10:06
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// var isSymmetric = function(root) {
//
//     function preorder(root, ans, leftFirst) {
//         if (!root) {
//             ans.push(undefined);
//             return ans;
//         }
//         ans.push(root.val);
//         if (leftFirst) {
//             preorder(root.left, ans, leftFirst);
//             preorder(root.right, ans, leftFirst);
//         } else {
//             preorder(root.right, ans, leftFirst);
//             preorder(root.left, ans, leftFirst);
//         }
//     }
//
//     var l = [];
//     var r = [];
//     preorder(root.left, l, true); // leftFirst true 左子树 先序从左遍历
//     preorder(root.right, r, false); // leftFirst false 右子树 先序从右遍历
//
//     if (l.length !== r.length) {
//         return false;
//     }
//     for (var i = 0; i < l.length; ++i) {
//         if (l[i] !== r[i]) {
//             return false;
//         }
//     }
//     return true;
// };

var isSymmetric = function(root) {
    if (!root) {
        return true;
    }

    var queue = [];
    queue.push(root);
    while (queue.length) {
        var len = queue.length;
        var row = [];
        for (var i = 0; i < len; ++i) {
            var node = queue.shift();
            if (node) {
                row.push(node.val);
                queue.push(node.left);
                queue.push(node.right);
            } else {
                row.push(undefined);
            }
        }
        console.log(row)
        var l = 0;
        var r = row.length - 1;
        while (l < r) {
            if (row[l] !== row[r]) {
                return false;
            }
            l++;
            r--;
        }
    }
    return true;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var root = new TreeNode(1);

var left = new TreeNode(2);
// left.right = new TreeNode(3);

root.left = left;

var right = new TreeNode(2);
// right.right = new TreeNode(3);

root.right = right;

console.log(isSymmetric(root));
