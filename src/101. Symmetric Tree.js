/**
 * Created by admin on 2017/10/4.
 */
// 判断二叉树是否左右镜像
// 广度遍历
var isSymmetric = function (root) {
    if (!root) {
        return true;
    }
    var res = [];
    function bfs(node, lv) {
        if (lv === res.length) {
            res.push([]);
        }
        if (node) {
            res[lv].push(node.val);
            dfs(node.left, lv + 1, true);
            dfs(node.right, lv + 1, false);
        } else {
            res[lv].push("null");

        }
    }
    function isSymmetric(arr) {
        return arr.toString() === arr.reverse().toString();
    }

    dfs(root, 0);
    for (var i = 0; i < res.length; ++i) {
        if (!isSymmetric(res[i])) {
            return false
        }
    }

    return true;
};

var isSymmetric = function (root) {
    var queue = [root]
    while (queue.length) {
        var len = queue.length
        var i = 0
        var j = len - 1
        var list = []
        while (i < j) {
            if (queue[i] && queue[j]) {
                if (queue[i].val !== queue[j].val) return false
            } else if (queue[i] !== queue[j]) {
                return false
            }
            i++
            j--
        }
        queue.forEach(node => {
            if (node) {
                list.push(node.left)
                list.push(node.right)
            }

        })
        queue = list
    }
    return true
};