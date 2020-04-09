/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    var row = board.length;
    if (!row) return [];
    var col = board[0].length;

    var ans = [];
    for (var i = 0; i < row; ++i) {
        var line = [];
        for (var j = 0; j < col; ++j) {
            var arr = getAround(i, j);
            var lives = arr.filter(cell => cell == 1).length;
            if (board[i][j] == 1) {
                line[j] = lives < 2 || lives > 3 ? 0 : 1;
            } else {
                line[j] = lives === 3 ? 1 : 0;
            }
        }
        ans.push(line);
    }
    for (var i = 0; i < row; ++i) {
        for (var j = 0; j < col; ++j) {
            board[i][j] = ans[i][j]
        }
    }
    return board

    // 获取x,y周围位置的数据
    function getAround(x, y) {
        var arr = [];
        push(x - 1, y);
        push(x + 1, y);
        push(x, y - 1);
        push(x, y + 1);

        push(x - 1, y - 1);
        push(x + 1, y - 1);
        push(x - 1, y + 1);
        push(x + 1, y + 1);

        return arr

        function push(i, j) {
            if (i >= 0 && i < row && j >= 0 && j < col) {
                arr.push(board[i][j]);
            }
        }
    }
};

var board = [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0]
];
var res = gameOfLife(board);

console.log('res')
console.log(res);
//   [
//     [0,0,0],
//     [1,0,1],
//     [0,1,1],
//     [0,1,0]
//   ]
