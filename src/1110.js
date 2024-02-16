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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function (root, to_delete) {

    var ans = []
    if (!to_delete.includes(root.val)) {
        ans.push(root)
    } else {
        root.left && ans.push(root.left)
        root.right && ans.push(root.right)
    }


    function dfs(parent, key) {
        var node = parent[key]
        if (!node) return

        if (to_delete.includes(node.val)) {
            parent[key] = null

            var idx = ans.indexOf(node)
            if (idx > -1) {
                ans.splice(idx, 1)
            }

            if (node.left) {
                ans.push(node.left)

            }
            if (node.right) {
                ans.push(node.right)
            }
        }
        dfs(node, 'left')
        dfs(node, 'right')
    }
    dfs(root, 'left')
    dfs(root, 'right')

    return ans
};

// 思路2：后序遍历
var delNodes = function (root, to_delete) {
    var ans = []

    function postorder(node) {
        if (!node) return null
        node.left = postorder(node.left)
        node.right = postorder(node.right)

        if (to_delete.includes(node.val)) {
            if (node.left && !to_delete.includes(node.left.val)) {
                ans.push(node.left)
            }
            if (node.right && !to_delete.includes(node.right.val)) {
                ans.push(node.right)
            }
            return null
        }
        return node
    }

    postorder(root)

    if (!to_delete.includes(root.val)) {
        ans.push(root)
    }
    return ans

}