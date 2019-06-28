/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    if (!root) {
        return [];
    }

    var map = new Map();
    var ans = [];

    function helper(root, map) {
        if (!root) {
            return "#";
        }
        var sub = root.val + "," + helper(root.left, map) + "," + helper(root.right, map);  // 获取每个节点的序列化表达式

        if (!map.has(sub)) {
            map.set(sub, 1);
        } else {
            var times = map.get(sub);
            if (times === 1) {
                ans.push(root);
            }
            map.set(sub, times + 1);
        }

        return sub;
    }

    helper(root, map);
    return ans;
};

