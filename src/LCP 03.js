/**
 * @param {string} command
 * @param {number[][]} obstacles
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */

// 由于数据量很大，直接模拟会超时
var robot = function (command, obstacles, x, y) {
    let i = 0
    let j = 0
    let index = 0
    const n = command.length
    const map = {}

    for (const o of obstacles) {
        const [i, j] = o
        if (!map[i]) {
            map[i] = {}
        }
        map[i][j] = 1
    }
    while (true) {
        const c = command[index]
        if (c === 'U') {
            j++
        } else if (c === 'R') {
            i++
        }
        if (i === x && j === y) {
            return true
        }
        if (i > x || j > y) return false
        if (map[i] && map[i][j]) return false
        index = (index + 1) % n
    }
};
// 因此，我们需要判断从(0,0)开始，能否到达目标(x,y)或者obstacles[i]，按照command走完一轮后，如果两个点之间的斜率不相等，则肯定不能达到
var robot = function (command, obstacles, x, y) {

    let i = 0, j = 0
    for (const ch of command) {
        if (ch === 'U') {
            j++
        } else {
            i++
        }
    }
    if (!check(x, y, i, j)) return false

    for (const o of obstacles) {
        if (o[0] > x || o[1] > y) continue
        if (check(o[0], o[1], i, j)) return false
    }
    return true

    function check(tx, ty, x, y) {
        // round记录走到目标点至少要走多少轮
        var round = Math.min(Math.floor(tx / x), Math.floor(ty / y))
        var nx = round * x, ny = round * y
        if (nx == tx && ny == ty) return true
        for (const c of command) {
            if (c == 'U') {
                ++ny
            }
            else {
                ++nx
            }
            if (nx > tx || ny > ty) return false
            if (nx == tx && ny == ty) return true
        }

        return true;
    }
}



var command = "URR", obstacles = [], x = 3, y = 2
// command = "URR", obstacles = [[2, 2]]
command = "URR", obstacles = [[4, 2]], x = 3, y = 2
var ans = robot(command, obstacles, x, y)
console.log(ans)