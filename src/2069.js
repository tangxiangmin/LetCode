/**
 * @param {number} width
 * @param {number} height
 */
var Robot = function (width, height) {
    this.m = height
    this.n = width
    this.dir = 'East'
    this.x = 0
    this.y = 0
};

/** 
 * @param {number} num
 * @return {void}
 */
// 这个模拟会超时
// Robot.prototype.step = function (num) {

//     const { m, n } = this
//     let { x, y, dir } = this
//     if (m === 1 && n === 1) return

//     while (num > 0) {
//         if (dir === 'East') {
//             if (x === n - 1) {
//                 dir = 'North'
//                 continue
//             }
//             x++
//         } else if (dir === 'West') {
//             if (x === 0) {
//                 dir = 'South'
//                 continue
//             }
//             x--
//         } else if (dir === 'North') {
//             if (y === m - 1) {
//                 dir = 'West'
//                 continue
//             }
//             y++
//         } else {
//             if (y === 0) {
//                 dir = 'East'
//                 continue
//             }
//             y--
//         }
//         num--
//     }
//     this.x = x
//     this.y = y
//     this.dir = dir
// };

Robot.prototype.step = function (num) {

    const { m, n } = this
    let { x, y, dir } = this

    const total = (m + n) * 2 - 4 // 周长
    const dirs = ['East', 'North', 'West', 'South']
    let idx = dirs.indexOf(dir)
    if (num > total) {
        num = num % total
        // 四个角落上，旋转一周后会切换方向，主需要处理为East的情况，因为后续的转向在while循环里面会处理
        if ((x === 0 && y == 0 && idx === 0)) {
            idx = (idx + 3) % 4
        }
    }
    dir = dirs[idx]

    while (num > 0) {
        if (dir === 'East') {
            if (x === n - 1) {
                dir = 'North'
                continue
            }
            const val = Math.min(n - x - 1, num)
            x += val
            num -= val
        } else if (dir === 'West') {
            if (x === 0) {
                dir = 'South'
                continue
            }
            const val = Math.min(x, num)
            x -= val
            num -= val
        } else if (dir === 'North') {
            if (y === m - 1) {
                dir = 'West'
                continue
            }
            const val = Math.min(m - y - 1, num)
            y += val
            num -= val
        } else {
            if (y === 0) {
                dir = 'East'
                continue
            }
            const val = Math.min(y, num)
            y -= val
            num -= val
        }
    }
    this.x = x
    this.y = y
    this.dir = dir
};

/**
 * @return {number[]}
 */
Robot.prototype.getPos = function () {
    return [this.x, this.y]
};

/**
 * @return {string}
 */
Robot.prototype.getDir = function () {
    return this.dir
};

/**
 * Your Robot object will be instantiated and called as such:
 * var obj = new Robot(width, height)
 * obj.step(num)
 * var param_2 = obj.getPos()
 * var param_3 = obj.getDir()
 */