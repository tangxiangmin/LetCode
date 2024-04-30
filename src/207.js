/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// dfs，依次判断每个课程是否有可以学习的路径，最后几个长的测试用例会超时，尝试优化，加了一个cache缓存递归的记录
var canFinish = function (numCourses, prerequisites) {
    const g = new Array(numCourses).fill(0).map(() => new Array(0))
    for (const p of prerequisites) {
        const [u, v] = p
        g[u].push(v)
    }
    let visited = []
    let cache = []
    function dfs(i) {
        if (cache[i] !== undefined) return cache[i]
        const prev = g[i]
        if (prev.length === 0) return true
        if (visited[i]) return false

        visited[i] = true
        let flag = true
        for (const next of prev) {
            flag = dfs(next)
            if (!flag) break
        }
        visited[i] = false
        cache[i] = flag

        return flag
    }
    for (let i = 0; i < numCourses; ++i) {
        if (!dfs(i)) return false
    }
    return true
};

// 节点顺序相关的，可以考虑拓扑排序
// 要看看是否存在入度为0的节点，有的话，从这些节点dfs

// 可以使用BFS
var canFinish = function (numCourses, prerequisites) {
    const g = new Array(numCourses).fill(0).map(() => new Array())
    const inDegrees = new Array(numCourses).fill(0)
    // 要学a得先学b
    for (const [a, b] of prerequisites) {
        g[b].push(a)
        inDegrees[a]++
    }

    const queue = []
    for (let i = 0; i < numCourses; ++i) {
        if (inDegrees[i] === 0) {
            queue.push(i)
        }
    }
    const ans = []

    while (queue.length) {
        const node = queue.shift()
        ans.push(node)

        for (const next of g[node]) {
            inDegrees[next]--
            if (inDegrees[next] === 0) {
                queue.push(next)
            }
        }
    }
    return ans.length === numCourses
}
// 也可以使用dfs
var canFinish = function (numCourses, prerequisites) {
    const g = new Array(numCourses).fill(0).map(() => new Array())
    const inDegrees = new Array(numCourses).fill(0)
    // 要学a得先学b
    for (const [a, b] of prerequisites) {
        g[b].push(a)
        inDegrees[a]++
    }

    const ans = []
    const visited = []

    for (let i = 0; i < numCourses; ++i) {
        if (inDegrees[i] === 0) {
            dfs(i)
        }
    }

    return ans.length === numCourses
    function dfs(i) {
        visited[i] = 1
        ans.push(i)
        for (const next of g[i]) {
            if (visited[i]) continue
            inDegrees[next]--
            if (inDegrees[next] === 0) {
                dfs(next)
            }
        }
    }
}
var numCourses = 2, prerequisites = [[1, 0]]
numCourses = 2, prerequisites = [[1, 0], [0, 1]]
numCourses = 3, prerequisites = [[1, 0], [1, 2], [0, 1]]
numCourses = 4, prerequisites = [[2, 0], [1, 0], [3, 1], [3, 2], [1, 3]]
var ans = canFinish(numCourses, prerequisites)
console.log(ans)