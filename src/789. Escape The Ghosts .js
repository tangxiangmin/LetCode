/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
var escapeGhosts = function (ghosts, target) {
    // 到达目标需要的步数
    let playerStep = target[0] + target[1]

    for(let i = 0; i < ghosts.length; ++i){
        let ghost = ghosts[i]
        let step = Math.abs(ghost[0] - target[0]) + Math.abs(ghost[1] - target[1])
        if(step <= playerStep){
            return false
        }
    }
    return true
};