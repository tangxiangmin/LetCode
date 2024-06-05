/**
 
在一个 N x N 的坐标方格  grid 中，每一个方格的值 grid[i][j] 表示在位置 (i,j) 的平台高度。

现在开始下雨了。当时间为  t  时，此时雨水导致水池中任意位置的水位为  t 。你可以从一个平台游向四周相邻的任意一个平台，但是前提是此时水位必须同时淹没这两个平台。假定你可以瞬间移动无限距离，也就是默认在方格内部游动是不耗时的。当然，在你游泳的时候你必须待在坐标方格里面。

你从坐标方格的左上平台 (0，0) 出发。最少耗时多久你才能到达坐标方格的右下平台  (N-1, N-1)？

示例 1:

输入: [[0,2],[1,3]]
输出: 3
解释:
时间为 0 时，你位于坐标方格的位置为 (0, 0)。
此时你不能游向任意方向，因为四个相邻方向平台的高度都大于当前时间为 0 时的水位。

等时间到达 3 时，你才可以游向平台 (1, 1). 因为此时的水位是 3，坐标方格中的平台没有比水位 3 更高的，所以你可以游向坐标方格中的任意位置
示例 2:

输入: [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]
输出: 16
解释:
0 1 2 3 4
24 23 22 21 5
12 13 14 15 16
11 17 18 19 20
10 9 8 7 6

最终的路线用加粗进行了标记。
我们必须等到时间为 16，此时才能保证平台 (0, 0) 和 (4, 4) 是连通的

提示:

2 <= N <= 50.
grid[i][j] 位于区间 [0, ..., N*N - 1] 内。
 */

// 可以先模拟，当起点与终点存在一条路径的时候就返回
var swimInWater = function (grid) {
    const n = grid.length
    let t = 0
    while (true) {
        const visited = {}
        if (move(0, 0, visited)) {
            return t
        }
        t++
    }

    function move(i, j, visited) {
        if (i < 0 || i == n || j < 0 || j == n) return false
        if (grid[i][j] > t) {
            return false
        }
        if (i === n - 1 && j === n - 1) return true

        const key = `${i},${j}`
        if (visited[key]) return false
        visited[key] = 1
        return move(i, j + 1, visited) || move(i, j - 1, visited) || move(i + 1, j, visited) || move(i - 1, j, visited)

    }
}

// 答案在[0,max(grid)]中间，因此可以使用二分，找到左边界
var swimInWater = function (grid) {
    let max = 0
    const n = grid.length
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n; ++j) {
            max = Math.max(max, grid[i][j])
        }
    }
    let l = 0
    let r = max
    while (l <= r) {
        const mid = (l + r) >> 1
        const visited = {}
        if (move(0, 0, mid, visited)) {
            // 可以到达，答案在[l,mid]中间
            r = mid - 1
        } else {
            // 不能到达，答案在[mid+1,r]中间
            l = mid + 1
        }
    }
    return l

    function move(i, j, t, visited) {
        if (i < 0 || i == n || j < 0 || j == n) return false
        if (grid[i][j] > t) {
            return false
        }
        if (i === n - 1 && j === n - 1) return true

        const key = `${i},${j}`
        if (visited[key]) return false
        visited[key] = 1
        return move(i, j + 1, t, visited) || move(i, j - 1, t, visited) || move(i + 1, j, t, visited) || move(i - 1, j, t, visited)
    }
}
var grid = [[0, 1, 2, 3, 4], [24, 23, 22, 21, 5], [12, 13, 14, 15, 16], [11, 17, 18, 19, 20], [10, 9, 8, 7, 6]]
// grid = [[0, 2], [1, 3]]
var ans = swimInWater(grid)
console.log(ans)