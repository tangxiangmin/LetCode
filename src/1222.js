

/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
// 上下左右4个直线 + 4个对角线
// 棋盘大小8x8
var queensAttacktheKing = function (queens, king) {
    const m = 8
    const n = 8

    const dirs = [[-1, -1], [-1, 1], [1, -1], [1, 1]]

    const [targetX, targetY] = king
    let ans = []
    const board = new Array(m).fill(0).map(() => new Array(n).fill(0))
    for (const q of queens) {
        board[q[0]][q[1]] = 1
    }
    // board[targetX][targetY] = '*'
    // console.table(board)

    for (const q of queens) {
        if (check(targetX, targetY, q[0], q[1])) {
            ans.push(q)
        }
    }

    return ans

    function check(x1, y1, x2, y2) {
        if (x2 == 0 && y2 === 4) debugger
        if (x1 === x2) {
            // 同一行
            let tmp = y2
            if (y1 > y2) {
                y2 = y1
                y1 = tmp
            }
            for (let i = y1 + 1; i < y2; ++i) {
                if (board[x1][i] === 1) return false
            }
            return true
        } else if (y1 === y2) {
            // 同一列
            let tmp2 = x2
            if (x1 > x2) {
                x2 = x1
                x1 = tmp2
            }
            for (let i = x1 + 1; i < x2; ++i) {
                if (board[i][y1] === 1) return false
            }
            return true
        }

        let dirIndex = 0
        if (x1 < x2) {
            if (y1 < y2) {
                dirIndex = 3
            } else {
                dirIndex = 2
            }
        } else {
            if (y1 < y2) {
                dirIndex = 1
            } else {
                dirIndex = 0
            }
        }
        const [dx, dy] = dirs[dirIndex]
        while (x1 !== x2 && y1 !== y2) {
            x1 += dx
            y1 += dy
            if (x1 === x2 && y1 === y2) return true
            if (x1 >= m || y1 >= n || x1 < 0 || y1 < 0 || board[x1][y1] === 1) return false
        }
        return false
    }
};

var queens = [[0, 1], [1, 0], [4, 0], [0, 4], [3, 3], [2, 4]], king = [0, 0]
queens = [[0, 0], [1, 1], [2, 2], [3, 4], [3, 5], [4, 4], [4, 5]], king = [3, 3]
queens =
    [[5, 6], [7, 7], [2, 1], [0, 7], [1, 6], [5, 1], [3, 7], [0, 3], [4, 0], [1, 2], [6, 3], [5, 0], [0, 4], [2, 2], [1, 1], [6, 4], [5, 4], [0, 0], [2, 6], [4, 5], [5, 2], [1, 4], [7, 5], [2, 3], [0, 5], [4, 2], [1, 0], [2, 7], [0, 1], [4, 6], [6, 1], [0, 6], [4, 3], [1, 7]], king = [3, 4]
var ans = queensAttacktheKing(queens, king)
console.log(JSON.stringify(ans))