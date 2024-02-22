/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const { BinaryTreeNode: TreeNode, flattenBinaryTree } = require('../libs/tree')
// 后序遍历最后一个节点是根节点，然后再中序遍历中找到这个节点，中序列表左边的就是左子树，右边的就是右子树；对于后序遍历而言，根据中序遍历左右子树的长度拆分
var buildTree = function (inorder, postorder) {
    if (!inorder.length) return null
    var rootVal = postorder[postorder.length - 1]
    var idx = inorder.indexOf(rootVal)
    if (idx === -1) return null

    var li = inorder.slice(0, idx)
    var ri = inorder.slice(idx + 1)

    var lp = postorder.slice(0, li.length)
    var rp = postorder.slice(li.length, postorder.length - 1)

    var root = new TreeNode(rootVal)

    root.left = buildTree(li, lp)
    root.right = buildTree(ri, rp)
    return root
};
// 拆分数组有额外的耗时，可以使用索引值来代替
var buildTree = function (inorder, postorder) {
    const n = inorder.length;
    const index = new Map();
    for (let i = 0; i < n; i++) {
        index.set(inorder[i], i);
    }

    function dfs(inL, inR, postL, postR) {
        if (postL === postR) { // 空节点
            return null;
        }
        const root = postorder[postR - 1]
        const leftSize = index.get(root) - inL; // 左子树的大小
        const left = dfs(inL, inL + leftSize, postL, postL + leftSize);
        const right = dfs(inL + leftSize + 1, inR, postL + leftSize, postR - 1);
        return new TreeNode(root, left, right);
    }
    return dfs(0, n, 0, n); // 左闭右开区间
};

inorder = [9, 3, 15, 20, 7], postorder = [9, 15, 7, 20, 3]
inorder = [2, 1], postorder = [2, 1]
var ans = buildTree(inorder, postorder)
console.log(flattenBinaryTree(ans))