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
var maxAncestorDiff = function(root) {
    return dfs(root, []);

    function dfs(root, parents) {
        if (!root) return 0;
        const { left, right, val } = root;

        let diff = parents.map(p => {
            return Math.abs(p.val - val);
        })
        let nums = [
            (left && Math.abs(val - left.val)) || 0,
            (right && Math.abs(val - right.val)) || 0,
            ...diff,
            dfs(left, [...parents, root]),
            dfs(right, [...parents, root])
        ];


        return Math.max(...nums);
    }
};
