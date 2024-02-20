/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */

// 思路：看起来是从叶子节点到根节点，尽量坐满人，坐满之后再换车，
// 等左右子树人齐之后再向上，因此后序遍历
var minimumFuelCost = function (roads, seats) {
    var edgeMap = {}
    for (var road of roads) {
        var [n1, n2] = road
        if (!edgeMap[n1]) edgeMap[n1] = []
        if (!edgeMap[n2]) edgeMap[n2] = []
        edgeMap[n1].push(n2)
        edgeMap[n2].push(n1)
    }
    var childrenMap = {}
    var parentMap = {}
    var visited = []

    function parse(n) {
        visited[n] = true
        var children = edgeMap[n]
        childrenMap[n] = []
        if (!Array.isArray(children)) return
        for (var child of children) {
            if (!visited[child]) {
                parentMap[child] = n
                childrenMap[n].push(child)
                parse(child)
            }
        }
    }
    parse(0)
    var ans = 0
    function dfs(n) {
        var children = childrenMap[n]
        if (!children.length) {
            if (n !== 0) {
                ans += 1
            }
            return 1 // 向上消耗1个
        }
        var sum = 1
        for (var child of children) {
            sum += dfs(child)
        }
        if (n !== 0) {
            ans += Math.ceil(sum / seats)
        }
        return sum
    }
    dfs(0)
    return ans
};
// 思路2：优化构建流程
var minimumFuelCost = function (roads, seats) {
    const n = roads.length;
    const g = new Array(n + 1).fill(0).map(() => new Array());
    for (const e of roads) {
        g[e[0]].push(e[1]);
        g[e[1]].push(e[0]);
    }
    var res = 0;
    var dfs = function (n, p) {
        var sum = 1;
        for (const child of g[n]) {
            if (child != p) {
                var peopleCnt = dfs(child, n)
                sum += peopleCnt
            }
        }
        if (n !== 0) {
            res += Math.ceil(sum / seats)
        }

        return sum;
    }
    dfs(0, -1);
    return res;
};

// var roads = [[0, 1], [0, 2], [0, 3]], seats = 5
roads = [[3, 1], [3, 2], [1, 0], [0, 4], [0, 5], [4, 6]], seats = 2
var ans = minimumFuelCost(roads, seats)
console.log(ans)