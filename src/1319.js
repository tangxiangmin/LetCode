/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
// n台机器需要n-1根线，统计有多少台机器未连接
// 有几个测试用例通不过
var makeConnected = function (n, connections) {
    const g = new Array(n).fill(0)
    for (const [a, b] of connections) {
        g[a]++
        g[b]++
    }
    let a = 0 // 未连接的线
    for (let i = 0; i < n; ++i) {
        if (g[i] === 0) {
            a++
        }
    }
    const b = n - a // 已经连接的线

    const line = connections.length

    if (line - (b - 1) >= a) {
        return a
    }
    return -1
};


// 上面的代码在于存在多种堆的情况，因此需要使用并查集，计算初始化时形成了x个连通分量（x堆），然后只需要x-1根线将他们连接起来即可
// 并查集 计算联通分量
class UnionFind {
    constructor (n) {
        this.parent = new Array(n).fill(0).map((element, index) => index);
        this.size = new Array(n).fill(1);
        // 当前连通分量数目
        this.setCount = n;
    }

    findset (x) {
        if (this.parent[x] === x) {
            return x;
        }
        this.parent[x] = this.findset(this.parent[x]);
        return this.parent[x];
    }

    unite (a, b) {
        let x = this.findset(a), y = this.findset(b);
        if (x === y) {
            return false;
        }
        if (this.size[x] < this.size[y]) {
            [x, y] = [y, x];
        }
        this.parent[y] = x;
        this.size[x] += this.size[y];
        this.setCount -= 1;
        return true;
    }

    connected (a, b) {
        const x = this.findset(a), y = this.findset(b);
        return x === y;
    }
}

var makeConnected = function(n, connections) {
    if (connections.length < n - 1) {
        return -1;
    }

    const uf = new UnionFind(n);
    for (const conn of connections) {
        uf.unite(conn[0], conn[1]);
    }

    return uf.setCount - 1;
};


var n = 4, connections = [[0, 1], [0, 2], [1, 2]]
var ans = makeConnected(n, connections)
console.log(ans)