/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    var nodes = []
    function dfs(root, deep, parent){
        if(!root){
            return 
        }
        if (!nodes[deep]) {
            nodes[deep] = []
        }
        // 保存每一层的节点
        nodes[deep].push({
            parent: parent.val,
            val: root.val
        });

        dfs(root.left, deep+1, root)
        dfs(root.right, deep+1, root)
    }
    dfs(root, 0, null);
    for(var i = 0; i < nodes.length; ++i){
        var lv = nodes[i]
        let res = lv.filter(function(item){
            return item.val === x || item.val === y
        })
        if(res.length === 2 ){
            return res[0].parent !== res[1].parent;
            
        }
    }
    return false
};
