/**
 * @param {number} n
 * @return {string[][]}
 */
// 回溯法，从左上角逐行逐列尝试摆放Q，然后判断是否冲突，冲突的话就撤回，不冲突的话就摆下一行，摆到最后一行则符合题目要求，加入结果里面
var solveNQueens = function (n) {
    var board = Array.from({ length: n }, () => Array(n).fill('.'));
    var ans = []
    function backtrack(board, row) {
        if (row === n) {
            ans.push(board.map(row => {
                return row.join('')
            }))
            return
        }
        // 在每一行每一列判断是否可以防止Q
        for (var i = 0; i < n; ++i) {
            if (!isValid(board, row, i)) {
                continue
            }
            board[row][i] = 'Q'
            backtrack(board, row + 1)
            board[row][i] = '.'
        }
    }

    // 因为下面和后面的都还没有摆放，因此只检查上方的区域即可
    var isValid = function (board, row, col) {
        var n = board.length;
        // 检查上方列是否有皇后互相冲突
        for (var i = 0; i <= row; i++) {
            if (board[i][col] === 'Q')
                return false;
        }
        // 检查右上方是否有皇后互相冲突
        for (var i = row - 1, j = col + 1;
            i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q')
                return false;
        }
        // 检查左上方是否有皇后互相冲突
        for (var i = row - 1, j = col - 1;
            i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q')
                return false;
        }
        return true;
    };
    backtrack(board, 0)
    return ans
};
var n = 4
var ans = solveNQueens(n)
console.log(JSON.stringify(ans))