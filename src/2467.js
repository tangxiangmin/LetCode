/**
 * @param {number[][]} edges
 * @param {number} bob
 * @param {number[]} amount
 * @return {number}
 */
// 思路：被bob经过的节点分数修改为0
// 有几个测试用例通不过，还没找到原因
var mostProfitablePath = function (edges, bob, amount) {
    var edgeMap = {}
    var parentMap = {}
    var childrenMap = {}
    for (var edge of edges) {
        var [n1, n2] = edge
        if (!edgeMap[n1]) edgeMap[n1] = []
        if (!edgeMap[n2]) edgeMap[n2] = []
        edgeMap[n1].push(n2)
        edgeMap[n2].push(n1)
    }

    var visited = [true]

    function parse(n) {
        var children = edgeMap[n]
        childrenMap[n] = []
        for (var child of children) {
            if (visited[child]) continue
            visited[child] = true
            parentMap[child] = n
            parse(child)
            childrenMap[n].push(child)
        }
    }

    // a：alice的位置，b:bob的位置
    var visited2 = []
    function dfs(a, b, sum) {
        if (a === b) {
            amount[b] /= 2
        } else if (!visited2[a]) {
            amount[b] = 0
        }
        visited2[a] = true
        sum += amount[a]
        var children = childrenMap[a]
        if (children.length) {
            var p = parentMap[b]
            return Math.max(...children.map((child) => dfs(child, p, sum)))
        }
        visited2[a] = false
        return sum
    }

    parse(0)
    return dfs(0, bob, 0)
};


var edges = [[0, 1], [1, 2], [1, 3], [3, 4]], bob = 3, amount = [-2, 4, 2, -4, 6]
// edges = [[0, 1]], bob = 1, amount = [-7280, 2350]
// edges = [[0, 1], [0, 2]], bob = 2, amount = [-3360, -5394, -1146]

edges = [[0, 21], [0, 6], [0, 29], [1, 3], [1, 38], [2, 31], [2, 33], [2, 27], [3, 23], [3, 8], [4, 5], [4, 21], [5, 11], [5, 25], [6, 27], [7, 22], [7, 21], [8, 12], [8, 20], [8, 16], [9, 10], [10, 17], [12, 15], [13, 24], [14, 29], [16, 24], [16, 34], [17, 19], [17, 27], [18, 35], [18, 26], [26, 36], [26, 30], [28, 30], [29, 30], [29, 37], [32, 34], [37, 38]]
bob = 26
amount = [3756, 7618, 130, -1544, -3646, 4384, -9736, 2100, -7186, -3798, -7392, 4092, 5620, 1172, -6354, -6590, 1262, -1392, -7034, -9342, -1682, 1894, -6922, -748, 5956, 708, -7370, 9076, 7734, -7514, -6478, 2288, 4584, -6494, 2790, -7840, 2196, 7712, 5556]
var ans = mostProfitablePath(edges, bob, amount)

console.log(ans)