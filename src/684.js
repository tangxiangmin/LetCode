/**
 * @param {number[][]} edges
 * @return {number[]}
 */
// 某个节点有两个父节点，则说明这条边是多余的
var findRedundantConnection = function (edges) {
    const n = edges.length
    const g = new Array(n + 1).fill(0).map(() => new Array())
    const arr = new Array(n + 1).fill(0)
    for (const [a, b] of edges) {
        g[a].push(b)
        g[b].push(a)
    }

};