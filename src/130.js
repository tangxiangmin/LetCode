/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// 思路：我们只需要找到与边界O节点联通的所有节点，然后将其余的节点都修改为X即可
var solve = function (board) {
    var r = board.length
    if (!r) return board
    var c = board[0].length

    for (var i = 0; i < r; ++i) {
        for (var j = 0; j < c; ++j) {
            // 从边界的O开始遍历
            var isEdge = i == 0 || i == r - 1 || j == 0 || j == c - 1
            if (isEdge && board[i][j] === 'O') {
                dfs(i, j)
            }
        }
    }

    for (var i = 0; i < r; ++i) {
        for (var j = 0; j < c; ++j) {
            if (board[i][j] === '#') {
                board[i][j] = 'O'
            } else {
                board[i][j] = 'X'
            }
        }
    }

    return board
    // 判断[x,y]是否是一个被包围的节点，true表示被包围
    function dfs(x, y) {
        // 处于边界的节点
        if (
            x < 0 || x > r - 1 || y < 0 || y > c - 1
            || board[x][y] === 'X'
            || board[x][y] === '#') return

        board[x][y] = '#' // 与边界联通的O均置为#
        dfs(x - 1, y)
        dfs(x + 1, y)
        dfs(x, y - 1)
        dfs(x, y + 1)
    }
};


var board = [
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'X']
]



// board = [
//     ["O", "O", "O", "O", "X", "X"],
//     ["O", "O", "O", "O", "O", "O"],
//     ["O", "X", "O", "X", "O", "O"],
//     ["O", "X", "O", "O", "X", "O"],
//     ["O", "X", "O", "X", "O", "O"],
//     ["O", "X", "O", "O", "O", "O"]
// ]

// board = [
//     ["O", "X", "O", "O", "O", "X"],
//     ["O", "O", "X", "X", "X", "O"],
//     ["X", "X", "X", "X", "X", "O"],
//     ["O", "O", "O", "O", "X", "X"],
//     ["X", "X", "O", "O", "X", "O"],
//     ["O", "O", "X", "X", "X", "X"]]
var res = solve(board)
console.log(res)