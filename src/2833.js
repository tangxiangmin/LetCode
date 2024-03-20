/**
 * @param {string} moves
 * @return {number}
 */
// 服了，下划线说明既可以向左，也可以向右，计算最大值
var furthestDistanceFromOrigin = function (moves) {

    let l = 0
    let r = 0
    let dash = 0
    for (let i = 0; i < moves.length; ++i) {
        const ch = moves[i]
        if (ch === 'R') {
            r++
        } else if (ch === 'L') {
            l++
        } else {
            dash++
        }
    }
    return Math.abs(l - r) + dash
};

var moves = "L_RL__R"
// moves = "_R__LL_"
var ans = furthestDistanceFromOrigin(moves)
console.log(ans)