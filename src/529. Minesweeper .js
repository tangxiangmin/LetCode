/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
    let [x, y] = click
    let row = board.length,
        col = board[0].length

    function search(x, y){
        if (x < 0 || x >= row || y < 0 || y >= col) {
            return
        }

        if (board[x][y] === 'E'){
            board[x][y] = 'B'
        } else if (board[x][y] === 'M'){
            setSquare(x, y)
        }
    }
    function setSquare(x, y){
        if (x < 0 || x >= row || y < 0 || y >= col) {
            return;
        }
        for(let i = -1; i < 2; ++i){
            for(let j = -1; j < 2; ++j){
                if(i !== 0 && j !== 0){
                    let target = board[x + i][y+j]
                    if(target == 'B'){
                        board[x + i][y + j] = '1'
                    } else if (parseInt(target)){
                        board[x + i][y + j] = parseInt(target) + 1;
                    }
                }
            }
        }
    }

    // 踩到地雷
    if(board[x][y] == 'M'){
        board[x][y] = 'X'
        return board
    }
    
};

var board = [
    ["E", "E", "E", "E", "E"],
    ["E", "E", "M", "E", "E"],
    ["E", "E", "E", "E", "E"],
    ["E", "E", "E", "E", "E"]
];

var click = [3, 0]
updateBoard(board, click);