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
 * @return {TreeNode}
 */
// 中序遍历
var increasingBST = function (root) {
    var arr = []
    function dfs(node) {
        if (!node) return null
        dfs(node.left)
        arr.push(node)
        dfs(node.right)
    }
    dfs(root)
    for (var i = 0; i < arr.length; ++i) {
        var node = arr[i]
        var next = arr[i + 1] || null
        node.right = next
        node.left = null
    }
    return arr[0]
};
// 不使用额外的空间，在遍历过程中修改节点指向 left -> node ->right
// dfs，每个子树都返回其开头和结束的节点
var increasingBST = function (root) {
    function dfs(node) {
        if (!node) return [null, null]
        var { left, right } = node
        if (!left && !right) {
            return [node, node]
        }
        var l = node, r = node
        if (left) {
            var [lStart, lEnd] = dfs(left)
            lEnd.right = node
            l = lStart
        }
        node.left = null
        if (right) {
            var [rStart, rEnd] = dfs(right)
            node.right = rStart
            r = rEnd
        }

        return [l, r]
    }
    var [start, end] = dfs(root)
    return start
}

// 思路3，直接中序遍历，使用一个额外的头节点来保存
var increasingBST = function (root) {
    const dummyNode = new TreeNode(-1);
    let resNode = dummyNode;
    const inorder = (node) => {
        if (!node) {
            return;
        }
        inorder(node.left);

        // 在中序遍历的过程中修改节点指向
        resNode.right = node;
        node.left = null;
        resNode = node;

        inorder(node.right);
    }
    inorder(root);
    return dummyNode.right;
};
