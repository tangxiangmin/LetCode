/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    var queue = [root];
    var ans = [];
    while (queue.length) {
        var len = queue.length;
        for (var i = 0; i < len; ++i) {
            var node = queue.shift();
            if (node) {
                ans.push(node.val);

                queue.push(node.left);
                queue.push(node.right);
            } else {
                ans.push(null);
            }
        }
    }
    // 剔除末尾null元素
    var len = ans.length;
    for (var i = len - 1; i >= 0; --i) {
        if (ans[i] === null) {
            ans.pop();
        } else {
            break;
        }
    }
    return ans;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (!data.length) {
        return null;
    }
    var root = new TreeNode(data.shift());
    var lv = 1;
    var lastNodes = [root];
    while (data.length) {
        var len = Math.min(Math.pow(2, lv), data.length);
        for (var i = 0; i < len; ++i) {
            var val = data.shift();
            var parent = lastNodes[0];
            var node;
            if (val !== null) {
                node = new TreeNode(val);
                lastNodes.push(node);
            } else {
                node = null;
            }

            if (i % 2 === 1) {
                if (parent) {
                    parent.right = node;
                }
                lastNodes.shift();
            } else {
                if (parent) {
                    parent.left = node;
                }
            }
        }
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

//     1
//    / \
//   2   3
//      / \
//     4   5
// var arr = [1, 2, 3, null, null, 4, 5];
// // arr = [1,2]
// arr = [5, 2, 3, null, null, 2, 4, 3, 1];
// var root = deserialize(arr);
// var ans = serialize(root);
//
// console.log(ans);

module.exports = {
    deserialize,
    serialize
}
