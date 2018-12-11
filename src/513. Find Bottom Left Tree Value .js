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
var findBottomLeftValue = function (root) {
    let exploredDepth = -1;

    let leftMostNode;
    function dfs(node, depth){
        if(!node){
            return
        }

        if (depth > exploredDepth) {
            exploredDepth = depth;
            leftMostNode = node
        }
        dfs(node.left, depth + 1); // 由于找最左边的值，因此先遍历左边
        dfs(node.right, depth + 1)
    }
    dfs(root, 0);

    return leftMostNode && leftMostNode.val;
};