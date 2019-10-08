/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
// 思路：dfs找到所有从根到叶子节点的路径
var pathSum = function (root, sum) {
    if (!root) {
        return []
    }
    var ans = []
    dfs(root, [], sum)
    return ans
    function dfs(node, path, sum) {
        let { val, left, right } = node
        path = path.concat(val)
        sum -= val
        left && dfs(left, path.slice(), sum)
        right && dfs(right, path.slice(), sum)

        if (!left && !right && sum === 0) {
            ans.push(path)
        }
    }
};