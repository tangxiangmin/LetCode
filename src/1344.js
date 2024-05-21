/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
// 分别计算相对比12点的夹角
var angleClock = function (hour, minutes) {
    const h = (hour % 12) / 12 * 360 + minutes / 60 * 30
    const m = minutes / 60 * 360

    const v = Math.abs(m - h)
    return v <= 180 ? v : 360 - v
};

var hour = 12, minutes = 30
hour = 4, minutes = 50
hour = 12, minutes = 0

hour = 1, minutes = 57

var ans = angleClock(hour, minutes)
console.log(ans)