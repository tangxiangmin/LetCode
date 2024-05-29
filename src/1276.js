/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */

// 解方程式
// x*4 + y*2 = tomatoSlices
// y + x = cheeseSlices
// x* 4 + （cheeseSlices - x）*2 = tomatoSlices
var numOfBurgers = function (tomatoSlices, cheeseSlices) {

    const x = (tomatoSlices - 2 * cheeseSlices) / 2
    if (x % 1 !== 0 || cheeseSlices - x < 0 || x < 0) return []
    return [x, cheeseSlices - x]
};
var tomatoSlices = 16, cheeseSlices = 7
tomatoSlices = 2537427, cheeseSlices = 860448
var ans = numOfBurgers(tomatoSlices, cheeseSlices)
console.log(ans)