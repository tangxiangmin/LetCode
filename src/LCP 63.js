/**
 * @param {number} num
 * @param {string[]} plate
 * @return {number[][]}
 */
// 模拟符合条件的边缘位置
var ballGame = function (num, plate) {
    const m = plate.length
    const n = plate[0].length
    let ans = []
    for (let i = 1; i < n - 1; ++i) {
        // 上边
        check(0, i, 2)
        // 下边
        check(m - 1, i, 0)
    }
    for (let i = 1; i < m - 1; ++i) {
        // 左边
        check(i, 0, 1)
        // 右边
        check(i, n - 1, 3)
    }
    return ans

    function check(i, j, dir) {
        if (plate[i][j] !== '.') return
        if (dfs(i, j, dir, 0)) {
            ans.push([i, j])
        }
    }

    // dir 定义向上为0，顺时针分别为0,1,2,3
    function dfs(i, j, dir, cnt) {
        if (i < 0 || i == m || j < 0 || j === n) return false
        if (cnt > num) return false
        const val = plate[i][j]

        if (val === 'O') {
            return true
        }

        if (val === 'E') {
            dir = (dir + 1) % 4
        } else if (val === 'W') {
            dir = dir - 1
            if (dir < 0) {
                dir = 3
            }
        }

        if (dir === 0) {
            i -= 1
        } else if (dir === 1) {
            j += 1
        } else if (dir === 2) {
            i += 1
        } else if (dir === 3) {
            j -= 1
        }
        return dfs(i, j, dir, cnt + 1)
    }
};
var num = 4, plate = ["..E.", ".EOW", "..W."]
var ans = ballGame(num, plate)
console.log(JSON.stringify(ans))