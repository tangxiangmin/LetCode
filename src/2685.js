/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
// 先来并查集，然后判断每个分组是否符合完全连通分量的条件，对于一个包含x个节点的分组，如果是完全连通分量，则每个节点的入度都是x-1

class DisjoinSet {
    constructor(n) {
        const parent = new Array(n).fill(0)
        for (let i = 0; i < n; ++i) {
            parent[i] = i
        }
        this.parent = parent
    }

    find(x) {
        while (this.parent[x] !== x) {
            x = this.parent[x]
        }
        return x
    }

    union(x, y) {
        const px = this.find(x)
        const py = this.find(y)
        if (px === py) return
        this.parent[py] = px
    }
    connected(x, y) {
        return this.find(x) === this.find(y)
    }

    getParentGroup() {
        const map = {}
        const parent = this.parent
        const n = parent.length
        for (let i = 0; i < n; ++i) {
            const p = this.find(i)
            if (!map[p]) map[p] = []
            map[p].push(i)
        }
        return Object.values(map)
    }

}
var countCompleteComponents = function (n, edges) {
    const joinSet = new DisjoinSet(n)
    const inDegress = new Array(n).fill(0)
    for (const [a, b] of edges) {
        joinSet.union(a, b)
        inDegress[a]++
        inDegress[b]++
    }

    const groups = joinSet.getParentGroup()

    let ans = 0
    for (const group of groups) {
        if (check(group)) {
            ans++
        }
    }
    return ans

    function check(group) {
        const n = group.length
        for (const node of group) {
            if (inDegress[node] !== n - 1) return false
        }
        return true

    }
};

var n = 6, edges = [[0, 1], [0, 2], [1, 2], [3, 4]]
n = 6, edges = [[0, 1], [0, 2], [1, 2], [3, 4], [3, 5]]
n = 3, edges = [[1, 0], [2, 0]]
var ans = countCompleteComponents(n, edges)
console.log(ans)
// 0, 1,2
// 1,1,2