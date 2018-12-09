/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    let row = board.length,
        col = board[0].length;


    function isShip(n) {
        return n === "X";
    }
    let res = 0;
    for (let i = 0; i < row; ++i) {
        for (let j = 0; j < col; ++j) {
            if (
                !isShip(board[i][j - 1]) &&
                (!board[i - 1] || !isShip(board[i - 1][j])) &&
                isShip(board[i][j])
            ) {
                res++;
            }
        }
    }
    return res;
};
let input = ["X..X", "...X", "...."];

countBattleships(input);
