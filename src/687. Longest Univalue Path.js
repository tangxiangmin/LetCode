// 找到二叉树中，每个节点值相同的路径的长度最大值，路径可以通过root
// 长度是由连接节点的边数决定的

// 思路，深度优先
var longestUnivaluePath = function(root) {

    function dfs(root, val){
        if (!root || root.val != val) return 0;
        return 1 + Math.max(dfs(root.left, val), dfs(root.right, val));
    }

    if (!root) return 0;

    var sub = Math.max(longestUnivaluePath(root.left),  longestUnivaluePath(root.right));

    return Math.max(sub, dfs(root.left, root.val) + dfs(root.right, root.val));
};