/**
 * @param {number[][]} edges
 * @return {number[]}
 */
// 并查集，在union的时候判断两个节点是否已经属于同一组，如果是的话，则说明这条边是多余的
var findRedundantConnection = function (edges) {
    const n = edges.length
    const parent = new Array(n + 1).fill(0)

    for (let i = 1; i <= n; ++i) {
        parent[i] = i
    }

    for (const [a, b] of edges) {
        if (find(a) === find(b)) {

            return [a, b]
        } else {
            union(a, b)
        }
    }

    function find(x) {
        while (parent[x] !== x) {
            x = parent[x]
        }
        return x
    }
    function union(x, y) {
        const px = find(x)
        const py = find(y)
        parent[py] = px
    }
};

var edges = [[1, 2], [1, 3], [2, 3]]
var ans = findRedundantConnection(edges)
console.log(ans)