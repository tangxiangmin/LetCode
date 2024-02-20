// N叉树的后序遍历
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
// 递归
var postorder = function (root) {

    var res = [];
    function dfs(root) {
        if (!root) {
            return;
        }
        root.children.forEach(subNode => {
            dfs(subNode);
        });
        res.push(root.val);
    }

    dfs(root);
    return res;
};

// 遍历，使用栈模拟递归栈
var postorder = function (root) {
    if (!root) return []
    var stack = [root]
    var ans = []
    var visited = new Map()
    while (stack.length) {
        var top = stack[stack.length - 1]
        var flag = false
        // 选择第一个为访问的子节点入栈
        for (var child of top.children) {
            if (visited.get(child)) continue
            flag = true
            visited.set(child, true)
            stack.push(child)
            break
        }
        // 子节点已经全部遍历，后序遍历出栈
        if (!flag) {
            ans.push(top.val)
            stack.pop()
        }
    }
    return ans
}