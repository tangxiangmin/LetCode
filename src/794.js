/**
 * @param {string[]} board
 * @return {boolean}
 */
// 思路，就是区分O和X的个数，同时判断游戏并没有结束
var validTicTacToe = function (board) {
    let xCount = 0, oCount = 0;
    for (const row of board) {
        for (const c of row) {
            xCount = (c === 'X') ? (xCount + 1) : xCount;
            oCount = (c === 'O') ? (oCount + 1) : oCount;
        }
    }
    return !((oCount != xCount && oCount != xCount - 1) ||
        (oCount != xCount - 1 && win(board, 'X')) ||
        (oCount != xCount && win(board, 'O')));
};

const win = (board, p) => {
    for (let i = 0; i < 3; ++i) {
        if ((p == board[0][i] && p == board[1][i] && p == board[2][i]) ||
            (p == board[i][0] && p == board[i][1] && p == board[i][2])) {
            return true;
        }
    }
    return ((p == board[0][0] && p == board[1][1] && p == board[2][2]) ||
        (p == board[0][2] && p == board[1][1] && p == board[2][0]));
}