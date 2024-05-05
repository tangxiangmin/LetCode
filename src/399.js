/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */

var calcEquation = function (equations, values, queries) {
    const n = equations.length
    const map = {}
    // map[x][y]=a 表示 x = a * y
    for (let i = 0; i < n; ++i) {
        const [x, y] = equations[i]
        const v = values[i]
        if (!map[x]) map[x] = {}
        if (!map[y]) map[y] = {}
        map[x][y] = v
        map[y][x] = 1 / v
    }

    const ans = []
    for (const [x, y] of queries) {
        const val = dfs(x, 1, y, 1, {})
        ans.push(val == null ? -1 : val)
    }
    return ans

    function dfs(x, vx, y, vy, visited) {
        if (!map[x] || !map[y]) return null
        const key = `${x},${y}`
        if (visited[key]) return null
        visited[key] = 1
        if (x === y) {
            return vx / vy
        }

        // 将y用x来替换

        for (const sub in map[y]) {
            const val = dfs(x, vx, sub, map[y][sub] * vy, visited)
            if (val !== null) {
                return val
            }
        }
        return null
    }
};
var equations = [["a", "b"], ["b", "c"]], values = [2.0, 3.0], queries = [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]]
equations = [["a", "b"], ["b", "c"], ["bc", "cd"]], values = [1.5, 2.5, 5.0], queries = [["a", "c"], ["c", "b"], ["bc", "cd"], ["cd", "bc"]]
var ans = calcEquation(equations, values, queries)
console.log(ans)