/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    var row = board.length;
    if (!row) return 0;

    var col = board[0].length;
    var ans = 0;

    for (var i = 0; i < row; ++i) {
        for (var j = 0; j < col; ++j) {
            if (board[i][j] === "R") {
                for (k = j - 1; k >= 0; --k) {
                    var cur = board[i][k];
                    if (cur === "B") {
                        break;
                    }
                    if (cur === "p") {
                        ans++;
                        break;
                    }
                }

                for (k = j + 1; k < col; ++k) {
                    var cur = board[i][k];
                    if (cur === "B") {
                        break;
                    }
                    if (cur === "p") {
                        ans++;
                        break;
                    }
                }

                for(let k = i-1; k >=0; --k){
                    var cur = board[k][j];
                    if (cur === "B") {
                        break;
                    }
                    if (cur === "p") {
                        ans++;
                        break;
                    }
                }
                for(let k = i+1; k < col; ++k){
                    var cur = board[k][j];
                    if (cur === "B") {
                        break;
                    }
                    if (cur === "p") {
                        ans++;
                        break;
                    }
                }
                return ans
            }
        }
    }
    return 0
};
