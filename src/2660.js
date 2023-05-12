/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function (player1, player2) {
    var len = player1.length;
    var s1 = 0;
    var s2 = 0;
    for (var i = 0; i < len; ++i) {
        s1 += calc(player1, i);
        s2 += calc(player2, i);
    }
    if (s1 === s2) return 0;
    return s1 > s2 ? 1 : 2;

    function calc(scores, i) {
        if (scores[i - 1] === 10 || scores[i - 2] === 10) return 2 * scores[i];
        return scores[i];
    }
};

var player1 = [4, 10, 7, 9],
    player2 = [6, 5, 2, 3];
(player1 = [3, 5, 7, 6]), (player2 = [8, 10, 10, 2]);
(player1 = [2, 3]), (player2 = [4, 1]);
var ans = isWinner(player1, player2);
console.log(ans);
