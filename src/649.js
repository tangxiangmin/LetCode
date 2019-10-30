/**
 * @param {string} senate
 * @return {string}
 */
// 思路：根据题意，前面的同阵营应该禁掉下一个异阵营的权利，循环直至最后只剩同阵营的人
var predictPartyVictory = function (senate) {
    if (senate.length <= 2) {
        return senate[0] === 'R' ? 'Radiant' : 'Dire'
    }
    var start = senate[0]
    var alive = ''
    // 为0时表示全部同阵营，可胜利
    var kill_d = 0 // 可以跳过的d阵营的人
    var kill_r = 0 // 可以跳过的r阵营的人

    for (var i = 0; i < senate.length; ++i) {
        var ch = senate[i]
        // 在前面被杀死的人无法执行任何操作，将被跳过
        if (ch === 'D' && kill_d > 0) {
            kill_d--
            continue
        }
        if (ch === 'R' && kill_r > 0) {
            kill_r--
            continue
        }

        ch === 'R' ? kill_d++ : kill_r++
        alive += ch
    }
    // 全部相同，则也返回
    if (alive === senate) return start === 'R' ? 'Radiant' : 'Dire'

    // console.log(kill_r, kill_d, alive)
    // 处理剩余的kill_
    var ans = ''
    for (var i = 0; i < alive.length; ++i) {
        var ch = alive[i]
        if (ch === 'D' && kill_d > 0) {
            kill_d--
        } else if (ch === 'R' && kill_r > 0) {
            kill_r--
        } else {
            ans += ch
        }
    }
    // console.log(ans)

    return predictPartyVictory(ans)
};

var senate = 'DDRRR'
senate = "RDD"
senate = "RRRRRRDD"
senate = "DRRDRDRDRDDRDRDRD"
// drrrdddd
// ddd

var res = predictPartyVictory(senate)
console.log(res)