/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} start
 * @return {number}
 */
// 思路1:建图，统计每个节点关联的节点，然后bfs
var amountOfTime = function (root, start) {

    var edgeMap = {}
    function dfs(node, parentVal) {
        if (!node) return
        var val = node.val
        if (!edgeMap[val]) {
            edgeMap[val] = []
        }
        if (parentVal) {
            edgeMap[val].push(parentVal)
            edgeMap[parentVal].push(val)
        }
        dfs(node.left, val)
        dfs(node.right, val)
    }
    dfs(root, 0)
    var visited = []
    var ans = 0
    var queue = edgeMap[start]
    visited[start] = true
    while (queue.length) {
        var nextQueue = []
        for (var i = 0; i < queue.length; ++i) {
            var next = queue[i]
            visited[next] = true
            edgeMap[next].forEach(val => {
                if (!visited[val]) {
                    nextQueue.push(val)
                }
            })
        }
        queue = nextQueue
        ans++
    }
    return ans
};

// 思路2：dfs，每个节点可能有四种状态，自己已经被感染，被父节点感染，被左节点感染，被右节点感染
var amountOfTime = function (root, start) {

    var ans = 0
    // sum == -1 表示未被感染；否则表示感染的时间，最后ans取最大值
    function dfs(node, start, sum) {
        if (!node) return -1
        // 本节点自己感染
        if (sum === -1 && node.val === start) {
            sum = 0
        }
        if (sum !== -1) {
            // 本节点已经被感染，传递给子树
            dfs(node.left, start, sum + 1)
            dfs(node.right, start, sum + 1)
            if (sum > ans) ans = sum
            return sum + 1
        } else {
            let tem = dfs(node.left, start, sum)
            if (tem !== -1) {
                sum = tem
                dfs(node.right, start, sum + 1)
            } else {
                sum = dfs(node.right, start, sum)
                dfs(node.left, start, sum + 1)
            }
        }
        if (sum > ans) ans = sum
        if (sum !== -1) return sum + 1
        return -1

    }
    dfs(root, start, -1);
    return ans
}

var amountOfTime = function (root, start) {

    var max = 0
    // sum == -1 表示未被感染；否则表示感染的时间，最后ans取最大值
    function dfs(root, start, sum) {
        if (root === null) return -1;
        if (sum === -1 && root.val === start) {
            sum = 0;
        }
        if (sum !== -1) {
            dfs(root.left, start, sum + 1);
            dfs(root.right, start, sum + 1);
            if (sum > max) max = sum;
            return sum + 1;
        } else {
            let tem = dfs(root.left, start, sum);
            if (tem !== -1) {
                sum = tem;
                dfs(root.right, start, sum + 1);
            } else {
                sum = dfs(root.right, start, sum);
                dfs(root.left, start, sum + 1);
            }
        }
        if (sum > max) max = sum;
        if (sum !== -1) return sum + 1;
        return -1;
    }
    dfs(root, start, -1);
    return max
}