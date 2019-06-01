// 广度优先遍历

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var res = []
    function bfs(node, deep){
        if(!node){
            return 
        }
        if(!res[deep]){
            res[deep] = []
        }

        res[deep].push(node.val)
        node.children.forEach(item=>{
            bfs(item, deep+1)
        })
    }

    bfs(root, 0)
    return res
};