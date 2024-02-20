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
 * @param {number[]} queries
 * @return {number[][]}
 */
// 思路：单个节点挨个找，最后一个queries数据量很大的时候超时了
var closestNodes = function (root, queries) {
    function dfs(node, target, min, max) {
        if (!node) return [min === -Infinity ? -1 : min, max === Infinity ? -1 : max]
        if (node.val == target) {
            return [target, target]
        } else if (node.val > target) {
            return dfs(node.left, target, min, node.val)
        } else {
            return dfs(node.right, target, node.val, max)
        }
    }
    return queries.map(row => {
        return dfs(root, row, -Infinity, Infinity)
    })
};
// 因为二叉搜索树不是平衡的，如果是链表，在树上找容易超时，因此先中序遍历，然后再二分，这样可以保证query中每个元素的查找都是logn
var closestNodes = function (root, queries) {
    var arr = []
    function dfs(node) {
        if (!node) return
        dfs(node.left)
        arr.push(node.val)
        dfs(node.right)
    }
    dfs(root)

    function binarySearch(arr, target) {
        var l = 0
        var r = arr.length - 1
        var ans = arr.length
        while (l <= r) {
            var mid = Math.floor((l + r) / 2)
            if (arr[mid] >= target) {
                ans = mid
                r = mid - 1
            } else {
                l = mid + 1
            }
        }
        return ans
    }

    var res = []
    for (const val of queries) {
        let maxVal = -1, minVal = -1;
        let index = binarySearch(arr, val);
        if (index != arr.length) {
            maxVal = arr[index];
            if (arr[index] == val) {
                minVal = arr[index];
                res.push([minVal, maxVal]);
                continue;
            }
        }
        if (index != 0) {
            minVal = arr[index - 1];
        }
        res.push([minVal, maxVal]);
    }
    return res
}

var { createBinaryTree } = require('../libs/tree')
var root = [6, 2, 13, 1, 4, 9, 15, null, null, null, null, null, null, 14], queries = [2, 5, 16]
// root = [4,null,9], queries = [3]
var ans = closestNodes(createBinaryTree(root), queries)
console.log(JSON.stringify(ans))