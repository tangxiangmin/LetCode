/**
 * @param {number} n
 * @param {number} presses
 * @return {number}
 */
// 思路，看起来可以回溯，每次选择一个开关按下，一共就是4^presses次，这个枚举的数量太大了
// 一看题解，居然是数学
var flipLights = function (n, presses) {
    const seen = new Set();
    for (let i = 0; i < 1 << 4; i++) {
        const pressArr = new Array(4).fill(0);
        for (let j = 0; j < 4; j++) {
            pressArr[j] = (i >> j) & 1;
        }
        const sum = _.sum(pressArr);
        if (sum % 2 === presses % 2 && sum <= presses) {
            let status = pressArr[0] ^ pressArr[2] ^ pressArr[3];
            if (n >= 2) {
                status |= (pressArr[0] ^ pressArr[1]) << 1;
            }
            if (n >= 3) {
                status |= (pressArr[0] ^ pressArr[2]) << 2;
            }
            if (n >= 4) {
                status |= (pressArr[0] ^ pressArr[1] ^ pressArr[3]) << 3;
            }
            seen.add(status);
        }
    }
    return seen.size;
};
