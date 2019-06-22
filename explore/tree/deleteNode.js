/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if (!root) {
        return null;
    }

    var { left, right } = root;
    if (root.val === key) {
        if (left && right) {
            console.log(left.val, right.val);
            // 左右子树都存在，则需要将root替换成右子树最左边的值
            var node = findLeftMostNode(right);

            // 移除循环引用，重置根节点的left和right
            if (node.parent) {
                // 当父节点存在且node为其左节点时，说明node是最左侧的节点
                node.parent.left = null;
                // 如果node存在右节点，则需要将有节点插入父节点中
                if (node.right) {
                    insertIntoBST(node.parent, node.right);
                }
                node.right = right;
            } else if (node === right) {
                node.right = right.right;
            }

            node.left = left;
            root = node;
        } else if (left && !right) {
            root = left;
        } else if (right && !left) {
            root = right;
        } else {
            root = null;
        }
    } else if (root.val > key && left) {
        root.left = deleteNode(left, key);
    } else if (root.val < key && right) {
        root.right = deleteNode(right, key);
    }

    return root;

    // 中序遍历，找到一颗树中最左侧的节点
    function findLeftMostNode(root) {
        var ans = [];

        function inorder(root, parent) {
            if (!root) {
                return null;
            }
            root.parent = parent;
            inorder(root.left, root);
            ans.push(root);
            inorder(root.right, root);
        }

        inorder(root, null);
        console.log(ans.map(item => item.val));
        return ans[0];
    }

    function insertIntoBST(root, node) {
        if (!root || root === node) {
            return node;
        }
        if (root.val > node.val) {
            if (!root.left) {
                root.left = node;
            } else {
                insertIntoBST(root.left, node);
            }
        } else if (root.val <= node.val) {
            if (!root.right) {
                root.right = node;
            } else {
                insertIntoBST(root.right, node);
            }
        }
        return root;
    }
};
let { deserialize, serialize } = require("./serialize");

var data = [5, 3, 6, 2, 4, null, 7];
var target = 3;

data = [2, 0, 33, null, 1, 25, 40, null, null, 11, 31, 34, 45, 10, 18, 29, 32, null, 36, 43, 46, 4, null, 12, 24, 26, 30, null, null, 35, 39, 42, 44, null, 48, 3, 9, null, 14, 22, null, null, 27, null, null, null, null, 38, null, 41, null, null, null, 47, 49, null, null, 5, null, 13, 15, 21, 23, null, 28, 37, null, null, null, null, null, null, null, null, 8, null, null, null, 17, 19, null, null, null, null, null, null, null, 7, null, 16, null, null, 20, 6];
target = 33;

data = [1, 0, 15, null, null, 4, 35, 3, 8, 25, 49, 2, null, 5, 12, 22, 27, 47, null, null, null, null, 7, 11, 13, 19, 24, 26, 31, 40, 48, 6, null, 9, null, null, 14, 17, 21, 23, null, null, null, 30, 33, 39, 42, null, null, null, null, null, 10, null, null, 16, 18, 20, null, null, null, 28, null, 32, 34, 36, null, 41, 44, null, null, null, null, null, null, null, null, null, 29, null, null, null, null, null, 37, null, null, 43, 46, null, null, null, 38, null, null, 45];
target = 22;

var root = deserialize(data);
var res = deleteNode(root, target);

var arr = serialize(res);
// console.log(arr);
console.log(arr.length);
