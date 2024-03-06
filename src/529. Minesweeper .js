/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
    const row = board.length;
    const col = board[0].length

    function dfs(x, y) {
        if (x < 0 || x >= row || y < 0 || y >= col) {
            return
        }
        if (board[x][y] !== 'E') return
        const count = countM(x, y)
        if (count !== 0) {
            board[x][y] = `${count}`
            return
        }
        board[x][y] = 'B'

        dfs(x + 1, y)
        dfs(x - 1, y)
        dfs(x, y + 1)
        dfs(x, y - 1)
        dfs(x + 1, y + 1)
        dfs(x - 1, y + 1)
        dfs(x + 1, y - 1)
        dfs(x - 1, y - 1)
    }

    // 统计某个单元格附近有多少颗雷，设置数量
    function countM(x, y) {
        let count = 0
        for (let i = -1; i <= 1; ++i) {
            for (let j = -1; j <= 1; ++j) {
                if (isM(x + i, y + j)) {
                    count++
                }
            }
        }
        return count
    }
    function isM(x, y) {
        if (x < 0 || x >= row || y < 0 || y >= col) {
            return false
        }
        return board[x][y] === 'M'
    }

    const [x, y] = click

    // 踩到地雷
    if (board[x][y] == 'M') {
        board[x][y] = 'X'
        return board
    }

    dfs(x, y)
    return board
};


var board = [
    ["E", "E", "E", "E", "E"],
    ["E", "E", "M", "E", "E"],
    ["E", "E", "E", "E", "E"],
    ["E", "E", "E", "E", "E"]
];

var click = [3, 0]
const ans = updateBoard(board, click);
console.log(JSON.stringify(board))