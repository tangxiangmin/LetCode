/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
// 思路，对于每个单元格，都dfs判断
// 很显然，空间复杂度和时间复杂度都很高
var pacificAtlantic = function (heights) {
    const m = heights.length
    const n = heights[0].length

    const ans = []
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            const val = heights[i][j]
            // if (i === 2 && j === 1) debugger
            let visited1 = new Array(m).fill(0).map(() => new Array(n).fill(0))
            let visited2 = new Array(m).fill(0).map(() => new Array(n).fill(0))

            const a = dfs(i, j, val, visited1)
            const b = dfs2(i, j, val, visited2)
            if (a && b) {
                ans.push([i, j])
            }
        }
    }

    return ans

    function dfs(i, j, val, visited) {
        if (i === m || j === n) {
            return true
        }
        if (i < 0 || j < 0) return false
        if (visited[i][j]) return false
        const h = heights[i][j]
        if (h > val) return false
        visited[i][j] = 1

        return dfs(i + 1, j, h, visited) || dfs(i, j + 1, h, visited) || dfs(i - 1, j, h, visited) || dfs(i, j - 1, h, visited)
    }

    function dfs2(i, j, val, visited) {
        if (i === -1 || j === -1) {
            return true
        }
        if (i === m || j == n) return false
        if (visited[i][j]) return false
        const h = heights[i][j]
        if (h > val) return false
        visited[i][j] = 1

        return dfs2(i + 1, j, h, visited) || dfs2(i, j + 1, h, visited) || dfs2(i - 1, j, h, visited) || dfs2(i, j - 1, h, visited)
    }

};
// 从四边向中间遍历更高的单元格，某个某个格子在两个路径都出现，则说明两边都可以到达
var pacificAtlantic = function (heights) {
    const m = heights.length
    const n = heights[0].length

    const pacific = new Array(m).fill(0).map(() => new Array(n).fill(0));
    const atlantic = new Array(m).fill(0).map(() => new Array(n).fill(0));


    for (let i = 0; i < n; ++i) {
        dfs(0, i, heights[0][i])
    }
    for (let i = 1; i < m; ++i) {
        dfs(i, 0, heights[i][0])
    }

    for (let i = 0; i < n; ++i) {
        dfs2(m - 1, i, heights[m - 1][i])
    }
    for (let i = 0; i < m - 1; ++i) {
        dfs2(i, n - 1, heights[i][n - 1])
    }
    // console.table(pacific)

    const ans = []
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (pacific[i][j] && atlantic[i][j]) {
                ans.push([i, j])
            }
        }
    }
    return ans


    // 可以到达 pacific的格子
    function dfs(i, j, prev) {
        // if (i === 2 && j === 2) debugger
        if (i === m || j === n) {
            return
        }
        if (i < 0 || j < 0) return

        const val = heights[i][j]
        if (val < prev) return

        if (pacific[i][j]) return

        pacific[i][j] = 1
        return dfs(i + 1, j, val) ||
            dfs(i - 1, j, val) ||
            dfs(i, j + 1, val) ||
            dfs(i, j - 1, val)
    }

    // 可以到达atlantic的格子
    function dfs2(i, j, prev) {
        if (i === -1 || j === -1) {
            return
        }
        if (i === m || j == n) return
        const val = heights[i][j]
        if (val < prev) return
        if (atlantic[i][j]) return
        atlantic[i][j] = 1
        return dfs2(i + 1, j, val) || dfs2(i - 1, j, val) || dfs2(i, j + 1, val) || dfs2(i, j - 1, val)

    }
}

var heights = [[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]]
heights = [
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5]
]
var ans = pacificAtlantic(heights)
console.log(JSON.stringify(ans))
console.log(ans.length)