/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function (root) {
    var ans = []
    // 找到所有根到叶子节点的路径
    dfs(root, '')
    console.log(ans)
    var sum = ans.reduce((acc, path) => {
        return acc + parseInt(path, 2)
    }, 0)
    return sum % (Math.pow(10, 9) + 7)

    // 依次计算

    function dfs(node, path) {
        var val = path + node.val
        if (node.left) {
            dfs(node.left, val)
        }
        if (node.right) {
            dfs(node.right, val)
        }

        if (!node.left && !node.right) {
            ans.push(val)
        }
    }
};