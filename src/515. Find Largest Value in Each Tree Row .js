/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
    let row = []
    function dfs(node, depth){
        if(!node){
            return 
        }
        if(!row[depth]){
            row[depth] = []
        }
        row[depth].push(node.val)
        dfs(node.left, depth + 1)
        dfs(node.right, depth+1)
    }
    dfs(root, 0)
    let res = []
    for(let i = 0; i < row.length; ++i){
        let max = Math.max.apply(null, row[i])
        res.push(max)
    }
    return res
};