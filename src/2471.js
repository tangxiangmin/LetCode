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
 * @return {number}
 */
// 看起来是bfs + 选择排序
var minimumOperations = function (root) {
    var queue = [root]
    var ans = 0
    while (queue.length) {
        var len = queue.length
        var list = []
        for (var i = 0; i < len; ++i) {
            var node = queue.shift()
            list.push(node.val)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        sortCount(list)
    }

    function sortCount(arr) {
        var len = arr.length
        for (var i = 0; i < len; ++i) {
            var min = i
            for (var j = i + 1; j < len; ++j) {
                if (arr[min] > arr[j]) {
                    min = j
                }
            }
            if (i !== min) {
                var tmp = arr[i]
                arr[i] = arr[min]
                arr[min] = tmp
                ans++
            }
        }
    }
    return ans
};