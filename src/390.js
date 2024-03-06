/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function (n) {

    // direct 0 向右移动 1向左移动
    function walk(n, direct) {
        if (n === 1) return 1
        if (n === 2) {
            return n - direct
        } else if (n % 2 === 1) {
            return walk(Math.floor(n / 2), 1 - direct) * 2
        } else {
            return walk(n / 2, 1 - direct) * 2 - direct;
        }
    }
    return walk(n, 0)
};