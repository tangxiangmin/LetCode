/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
// 思路：首先构造树，然后BF依次找到每个节点的子树符合要求的节点数量，数据量太大会超时
var countSubTrees = function (n, edges, labels) {
    var map = {}
    for (var edge of edges) {
        var [n1, n2] = edge
        if (!map[n1]) map[n1] = []
        if (!map[n2]) map[n2] = []
        map[n1].push(n2)
        map[n2].push(n1)
    }

    function parse(n) {
        var children = map[n]
        if (!Array.isArray(children) || !children.length) return
        for (var i = 0; i < children.length; ++i) {
            var child = children[i]
            var list = map[child]
            var idx = list.indexOf(n)
            list.splice(idx, 1)
        }
        children.forEach(child => {
            parse(child)
        })
    }

    var ans = []
    function find(n, label) {
        var count = 0
        if (labels[n] === label) {
            count++
        }
        var children = map[n]
        if (Array.isArray(children)) {
            children.forEach(child => {
                count += find(child, label)
            })
        }

        return count

    }
    function dfs(n) {

        ans[n] = find(n, labels[n])

        var children = map[n]
        if (Array.isArray(children)) {
            children.forEach(child => {
                dfs(child)
            })
        }
    }

    parse(0)
    dfs(0)
    return ans
};

// 思路2：递归，然后处理左右字数的字符合集，这样只需要遍历1次
var countSubTrees = function (n, edges, labels) {
    var map = {}
    for (var edge of edges) {
        var [n1, n2] = edge
        if (!map[n1]) map[n1] = []
        if (!map[n2]) map[n2] = []
        map[n1].push(n2)
        map[n2].push(n1)
    }

    var ans = []
    var visited = []
    var a = 'a'.charCodeAt(0)
    function dfs(n) {
        visited[n] = true
        var children = map[n]
        var label = labels[n]
        var counter = { [label]: 1 }
        var counter = Array(26).fill(0)
        var idx = label.charCodeAt(0) - a
        counter[idx] = 1
        Array.isArray(children) && children.forEach(child => {
            if (visited[child]) return
            var res = dfs(child)
            for (var i = 0; i < 26; ++i) {
                counter[i] += res[i] ?? 0
            }
        })
        ans[n] = counter[idx]
        return counter
    }

    dfs(0)
    return ans
};

var n = 7, edges = [[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]], labels = "abaedcd"
var ans = countSubTrees(n, edges, labels)
console.log(ans)