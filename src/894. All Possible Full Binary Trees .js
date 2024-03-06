/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
// 真二叉树的节点数量应该是奇数
// 左右子树数量的和
// total:n-1 left:1 right:total-left
var allPossibleFBT = function (n) {

    function dfs(n) {
        if (n % 2 === 0) return []
        if (n === 1) return [new TreeNode(0)]

        let left = 1
        const total = n - 1
        const ans = []
        while (left <= total - 1) {
            const l = dfs(left)
            const r = dfs(total - left)
            for (const lo of l) {
                for (const ro of r) {
                    const root = new TreeNode(0, lo, ro)
                    ans.push(root)
                }
            }
            left += 2
        }
        return ans
    }
    return dfs(n)
};