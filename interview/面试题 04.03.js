/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {TreeNode} tree
 * @return {ListNode[]}
 */
// 看起来就是一个bfs
var listOfDepth = function (tree) {
    var queue = [tree]
    var ans = []
    while (queue.length) {
        var len = queue.length
        let head
        for (var i = 0; i < len; ++i) {
            var node = queue.shift()
            var linkNode = new ListNode(node.val)
            if (!head) {
                head = linkNode
                ans.push(head)
            } else {
                head.next = linkNode
                head = linkNode
            }
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
    }
    return ans
};
// 思路2：dfs，将深入传进去应该也可以
var listOfDepth = function (tree) {
    var ans = []
    var rows = []//保存每一层当前末尾的节点
    function dfs(node, deep) {
        if (!node) return
        var linkNode = new ListNode(node.val)
        if (!ans[deep]) {
            ans[deep] = linkNode
        } else {
            var last = rows[deep]
            last.next = linkNode
        }
        rows[deep] = linkNode
        dfs(node.left, deep + 1)
        dfs(node.right, deep + 1)
    }
    dfs(tree, 0)
    return ans
}