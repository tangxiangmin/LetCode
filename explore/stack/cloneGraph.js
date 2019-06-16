/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    var root = clonNode(node);
    var hash = new Map();
    hash.set(node, root);

    dfs(node);
    return root;

    function clonNode(node) {
        return new Node(node.val, []);
    }

    function dfs(node) {
        if (!node) {
            return;
        }

        var neighbors = node.neighbors;
        for (var i = 0; i < neighbors.length; ++i) {
            var neighbor = neighbors[i];
            if (!hash.get(neighbor)) {
                hash.set(neighbor, clonNode(neighbor));
                dfs(neighbor);
            }
            // 为克隆节点添加邻居
            hash.get(node).neighbors.push(hash.get(neighbor));
        }
    }
};
