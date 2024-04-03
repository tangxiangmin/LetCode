/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function (instructions) {
    let dir = 0 // 0上，1右，2下，3左
    let x = 0
    let y = 0
    for (const ch of instructions) {
        if (ch === 'G') {
            if (dir === 0) {
                y++
            } else if (dir === 1) {
                x++
            } else if (dir === 2) {
                y--
            } else if (dir === 3) {
                x--
            }
        } else if (ch === 'L') {
            dir = (dir + 3) % 4
        } else if (ch === 'R') {
            dir = (dir + 1) % 4
        }
    }

    return dir !== 0 || (x == 0 && y == 0)
};

var instructions = "GGLLGG"
// instructions = "GL"
instructions = "GG"
var ans = isRobotBounded(instructions)
console.log(ans)