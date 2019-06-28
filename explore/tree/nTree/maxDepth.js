/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    function dfs(root, deep){
        if(!root){
            return deep
        }
        if(!root.children.length){
            return deep + 1
        }
        var max = -Infinity
        root.children.forEach(node=>{
            var res = dfs(node, deep + 1)
            if(res > max ){
                max = res
            }
        })
        return max
    }
    return dfs(root, 0)
};
