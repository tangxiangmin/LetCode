// 求机器人终点坐标

/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    let x = 0,
        y = 0;

    const LEFT = "left",
        TOP = "top",
        BOTTOM = "bottom",
        RIGHT = "right";

    let preDistance = TOP;

    // TODO
    function getMoveDistanve(start, end) {
        for(let i = 0; i < obstacles; ++i){
            let obstacle = obstacles[i]
            if (dir === TOP) {
                if (obstacle[0] == start[0] && obstacle[1] > start[1] && obstacle[1] < end[1]) {
                    end[1] = obstacle[1];
                    return end[1]
                }
            }
            if(dir === BOTTOM){
                if (obstacle[0] == start[0] && obstacle[1] < start[1] && obstacle[1] > end[1]) {
                    end[1] = obstacle[1];
                }
            }
            if(dir === LEFT){
                if (obstacle[1] == start[1] && obstacle[0] < start[0] && obstacle[0] > end[0]) {
                    end[0] = obstacle[0];

                }
            }
            if (dir === RIGHT) {
                if (obstacle[1] == start[1] && obstacle[0] > start[0] && obstacle[0] < end[0]) {
                    end[0] = obstacle[0];
                }
            }
        }
    }

    function handleCommand(command) {
        if (command === -2) {
            switch (preDistance) {
                case TOP:
                    preDistance = LEFT;
                    break;
                case LEFT:
                    preDistance = BOTTOM;
                    break;
                case BOTTOM:
                    preDistance = RIGHT;
                    break;
                case RIGHT:
                    preDistance = TOP;
                    break;
            }
        }else if(command === -1){
            switch (preDistance) {
                case TOP:
                    preDistance = RIGHT;
                    break;
                case RIGHT:
                    preDistance = BOTTOM;
                    break;
                case BOTTOM:
                    preDistance = LEFT;
                    break;
                case LEFT:
                    preDistance = TOP;
                    break;
            }
        }else {
            let start = [x,y],end
            switch (preDistance) {
                case TOP:
                    end = [x, y + command]
                    getMoveDistanve(start, end)
                    y = end[1]
                    break;
                case LEFT:
                    end = [x-command,y]
                    getMoveDistanve(start, end)
                    x = end[0]
                    break;
                case BOTTOM:
                    end = [x, y - command,]
                    getMoveDistanve(start, end)
                    y = end[1]
                    break;
                case RIGHT:
                    end = [x+ command,y]
                    getMoveDistanve(start, end)
                    x = end[0]
                    break;
            }
        }
    }

    for (let i = 0; i < commands.length; ++i) {
        handleCommand(commands[i])
    }
    return x*x + y*y
};
