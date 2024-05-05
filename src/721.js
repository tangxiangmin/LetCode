/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */

// 思路，可以使用并查集
class DisjoinSet {
    constructor(size) {
        this.parent = new Array(size).fill(0)
        this.rank = new Array(size).fill(0)
        for (let i = 0; i < size; ++i) {
            this.parent[i] = i
            this.rank[i] = 1
        }
    }

    union(x, y) {
        const rx = this.find(x)
        const ry = this.find(y)
        if (rx === ry) return
        if (this.rank[ry] > this.rank[rx]) {
            this.parent[rx] = ry
        } else {
            this.parent[ry] = rx
            if (this.rank[ry] === this.rank[rx]) {
                this.rank[rx] += 1
            }
        }
    }
    find(x) {
        while (this.parent[x] !== x) {
            x = this.parent[x]
        }
        return x
    }

    connected(x, y) {
        return this.find(x) === this.find(y)
    }
}
var accountsMerge = function (accounts) {
    const n = accounts.length
    const map = new Map()
    const set = new DisjoinSet(n)
    for (let i = 0; i < n; ++i) {
        for (let j = 1; j < accounts[i].length; ++j) {
            const email = accounts[i][j]
            if (!map.has(email)) {
                map.set(email, i)
            } else {
                const prev = map.get(email)
                set.union(prev, i)
            }
        }
    }
    const ans = {}
    for (let i = 0; i < n; ++i) {
        const key = set.find(i)
        if (!ans[key]) {
            ans[key] = new Set()
        }
        for (let j = 1; j < accounts[i].length; ++j) {
            ans[key].add(accounts[i][j])
        }
    }
    return Object.keys(ans).map((key) => {
        const set = ans[key]
        const arr = Array.from(set).sort()
        return [accounts[key][0], ...arr]
    })
}

var accounts = [
    ["John", "johnsmith@mail.com", "john00@mail.com"],
    ["John", "johnnybravo@mail.com"],
    ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
    ["Mary", "mary@mail.com"]
]
accounts = [
    ["Alex", "Alex5@m.co", "Alex4@m.co", "Alex0@m.co"],
    ["Ethan", "Ethan3@m.co", "Ethan3@m.co", "Ethan0@m.co"],
    ["Kevin", "Kevin4@m.co", "Kevin2@m.co", "Kevin2@m.co"],
    ["Gabe", "Gabe0@m.co", "Gabe3@m.co", "Gabe2@m.co"],
    ["Gabe", "Gabe3@m.co", "Gabe4@m.co", "Gabe2@m.co"]
]

// accounts = [
//     ["David", "David0@m.co", "David1@m.co"],
//     ["David", "David3@m.co", "David4@m.co"],
//     ["David", "David4@m.co", "David5@m.co"],
//     ["David", "David2@m.co", "David3@m.co"],
//     ["David", "David1@m.co", "David2@m.co"]
// ];

var res = accountsMerge(accounts);
console.log(JSON.stringify(res));
