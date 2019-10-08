/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
// 思路：生成节点为1...n的bst，由于中序遍历bst是一个升序数组，
// 则先确定根节点的值i，然后递归处理左子树1..i-1和右子树i+1...n
var generateTrees = function (n) {
    if (n == 0) {
        return []
    }
    return generate(1, n)
    function generate(start, end) {
        var ans = []
        if (start > end) {
            ans.push(null)
            return ans
        }
        for (var i = start; i <= end; ++i) {
            var left = generate(start, i - 1)
            var right = generate(i + 1, end)
            left.forEach(l => {
                right.forEach(r => {
                    var root = new TreeNode(i)
                    root.left = l
                    root.right = r
                    ans.push(root)
                })
            })
        }
        return ans
    }
};