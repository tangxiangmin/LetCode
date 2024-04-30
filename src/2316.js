/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
// 可以用并查集，求最后可以分为多少组


class DisjointSet {
    constructor(n) {
        this.parent = new Array(n)
        this.size = new Array(n).fill(1)
        this.n = n
        for (let i = 0; i < n; ++i) {
            this.parent[i] = i
        }
    }
    find(x) {
        const parent = this.parent
        while (parent[x] != x) {
            parent[x] = parent[parent[x]]
            x = parent[x]
        }
        return x
    }
    union(x, y) {
        const px = this.find(x)
        const py = this.find(y)
        if (px === py) return
        if (this.size[px] >= this.size[py]) {
            this.parent[py] = px
            this.size[px] += this.size[py]
        } else if (this.size[px] < this.size[py]) {
            this.parent[px] = py
            this.size[py] += this.size[px]
        }
    }
    connected(x, y) {
        return this.find(x) === this.find(y)
    }
}
var countPairs = function (n, edges) {
    const joinSet = new DisjointSet(n)
    for (const [a, b] of edges) {
        joinSet.union(a, b)
    }


    let ans = 0
    let u = 0
    for (var i = 0; i < n; i++) {
        if (joinSet.find(i) == i) {
            ans = ans + u * joinSet.size[i];
            u += joinSet.size[i];
        }
    }

    return ans
};

var n = 6, edges = [[0, 1], [2, 3], [4, 5]]
var n = 10000, edges = []
var ans = countPairs(n, edges)
console.log(ans)