/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
    var map = [];
    for (var i = 0; i < 3; ++i) {
        var row = new Array(3);
        map.push(row);
    }

    var turn = true;
    for (var move of moves) {
        var [x, y] = move;
        map[x][y] = turn ? "X" : "O";
        turn = !turn;
    }
    // 判断是否有成线的
    // 行
    for (var i = 0; i < 3; ++i) {
        if (map[i][0] && map[i][0] == map[i][1] && map[i][1] == map[i][2]) {
            return findReturn(map[i][0]);
        }
    }

    // 列
    for (var i = 0; i < 3; ++i) {
        if (map[0][i] && map[0][i] == map[1][i] && map[1][i] == map[2][i]) {
            return findReturn(map[0][i]);
        }
    }
    // 斜对面
    if (map[0][0] && map[0][0] == map[1][1] && map[1][1] === map[2][2]) {
        return findReturn(map[0][0]);
    }
    if (map[0][2] && map[0][2] == map[1][1] && map[1][1] === map[2][0]) {
        return findReturn(map[0][2]);
    }

    return moves.length === 9 ? "Draw" : "Pending";
    function findReturn(x) {
        return x === "X" ? "A" : "B";
    }
};
