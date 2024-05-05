/**
/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
// 并查集，将某个人不喜欢的人分到一组，最后判断某个人与他自己不喜欢的人是否相连
var possibleBipartition = function (n, dislikes) {
    const parent = new Array(n + 1).fill(0)
    for (let i = 1; i <= n; ++i) {
        parent[i] = i
    }
    
    // 保存每个人不喜欢的人的列表
    const g = new Array(n + 1).fill(0).map(() => new Array())
    for (const [a, b] of dislikes) {
        g[a].push(b)
        g[b].push(a)
    }

    for (let i = 1; i <= n; ++i) {
        for (const u of g[i]) {
            union(g[i][0], u)
        }
    }

    for (const [a, b] of dislikes) {
        if (find(a) === find(b)) return false
    }
    return true


    function find(x) {
        while (parent[x] !== x) {
            x = parent[x]
        }
        return x
    }
    function union(x, y) {
        const px = find(x)
        const py = find(y)
        if (px === py) return
        parent[py] = px
    }
};
var n = 5, dislikes = [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]]
// n = 4, dislikes = [[1, 2], [1, 3], [2, 4]]
var ans = possibleBipartition(n, dislikes)
console.log(ans)