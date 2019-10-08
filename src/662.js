/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 思路：求每层则需要使用bfs，部分测试用例会超时，可以优化为思路2的代码
var widthOfBinaryTree = function (root) {
    if (!root) {
        return 0
    }

    var queue = [root]
    var max = 0
    while (queue.length) {
        var len = queue.length
        // 统计当前层的宽度
        var start = 0, end = len - 1
        while (start <= end && (!queue[start] || !queue[end])) {
            if (!queue[start]) start++
            if (!queue[end]) end--
        }

        // 找到最左和最右的非空节点，求宽度
        if (queue[start] && queue[end]) {
            var w = end - start + 1
            max < w && (max = w)
        } else {
            break
        }

        // 获取下一层的元素
        for (var i = 0; i < len; ++i) {
            var node = queue.shift()
            if (!node) {
                // 占位
                queue.push(null)
                queue.push(null)
            } else {
                var { left, right } = node
                queue.push(left)
                queue.push(right)
            }
        }
    }
    return max
};

// 给每个节点一个 position 值，这样就可以计算左右节点的宽度了
var widthOfBinaryTree = function (root) {
    if (!root) {
        return 0
    }
    var queue = [{ node: root, deep: 0, pos: 0 }]
    var ans = 0
    while (queue.length) {
        var len = queue.length

        // 计算左右两个元素的宽度
        var start = queue[0]
        var last = queue[len - 1]
        var w
        if (start == last) {
            w = 1
        } else {
            w = last.pos - start.pos + 1
        }
        ans = Math.max(w, ans)
        // 保存有效的节点及其位置
        for (var i = 0; i < len; ++i) {
            var { node, deep, pos } = queue.shift()
            let { left, right } = node
            left && queue.push({
                node: left,
                deep: deep + 1,
                pos: pos * 2
            })
            right && queue.push({
                node: right,
                deep: deep + 1,
                pos: pos * 2 + 1 // 注意次数右节点的位置是父节点的位置*2+1
            })
        }
    }
    return ans
}